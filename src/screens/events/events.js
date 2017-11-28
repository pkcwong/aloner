import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { style } from "./style";
import firebase from 'react-native-firebase';
import { Header, Title, Left, Right, Body } from 'native-base';
import { HOST } from "../../lib/server/server";


export class Events extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'Events',
		tabBarIcon: ({tintColor}) => (<MaterialIcons size={30} color="#ffffff" name='event'/>)
	};

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
      eventsList: []
		};
	}

componentWillMount() {
	this.refresher();
}

render() {
	let Arr = this.state.eventsList.map((a, i) => {
				return(
				<Card key={i} style={style.cards}>
					<CardItem button onPress={() => {
						this.props.navigation.navigate('EventDetail',{a})
						}}>
						<Left>
							 <Image source={{uri: a.eventImage}} style={{height: 120, width: 120}}/>
						</Left>
						<Body>
							<Text style={style.title}>{a.eventName}</Text>
							<View style={{flexDirection:'row',marginTop:5}}>
								<View style={{margin:2}}>
								  <Text style={style.description}>Date:</Text>
								</View>
								<View style={{margin:2}}>
								  <Text  style={style.description}>{a.eventDate}</Text>
								</View>
							</View>
							<View style={ {flexDirection:'row',marginTop:2}}>
								<View style={ {margin:2}}>
								  <Text style={style.description}>Time:</Text>
								</View>
								<View style={ {margin:2}}>
								  <Text  style={style.description}>{a.eventTime}</Text>
								</View>
							</View>
							<View style={ {flexDirection:'row',marginTop:2}}>
								<View style={ {margin:2}}>
								  <Text style={style.description}>Location:</Text>
								</View>
								<View style={{margin:2}}>
								  <Text style={style.description}>{a.eventLocation}</Text>
								</View>
							</View>
						</Body>
					</CardItem>
				</Card>
			);
		});
		return (
			<Container>
				<Header style={style.Header}>
					<Body>
					<Title>Events</Title>
					</Body>
				</Header>
				<ScrollView>
					<Content style={{margin: 20}}>
						{Arr}
					</Content>
				</ScrollView>
			</Container>
		);
	}

	refresher() {
		fetch(HOST + '/api/events', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'method': 'category',
				'category': this.props.navigation.state.params.ename
			})
		}).then((response_dump) => {
			response_dump.json().then((res_dump) => {
				res_dump.forEach((item) => {
					fetch(HOST + '/api/events', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							method: 'query',
							_id: item['_id']
						})
					}).then((response_query) => {
						response_query.json().then((res_query) => {
							let event = {};
							event['_id'] = res_query['_id'];
							event['eventImage'] = 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg';
							event['eventName'] = res_query['description'];
							event['eventDate'] = new Date(res_query['time']['start']).toDateString();
							event['eventTime'] = new Date(res_query['time']['start']).getHours() + ':' + new Date(res_query['time']['start']).getMinutes() + ' - ' + new Date(res_query['time']['end']).getHours() + ':' + new Date(res_query['time']['end']).getMinutes();
							event['eventLocation'] = res_query['location'];
							event['eventVacancy']=res_query['quota'];
							event['eventEnroll']=res_query['enrollment'];
							event['eventDescription']=res_query['description'];
							fetch(HOST +　'/api/user', {
								method: 'POST',
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									uid: res_query['owner']
								})
							}).then((e)=>{
								e.json().then((haha)=>{
									event['eventUser']=haha['firstname']+" "+haha['lastname'];
								}).catch((err) => {
									console.error(err);
								});

							}).catch((err) => {
								console.error(err);
							});
							//event['eventUser']=res_query['owner'];
							
							this.setState({
								eventsList: this.state.eventsList.concat(event)
							});
							
						});
					}).catch((err) => {
						console.error(err);
					});
				});
			}).catch((err) => {
				console.error(err);
			});
		}).catch((err) => {
			console.error(err);
		});
	}

}

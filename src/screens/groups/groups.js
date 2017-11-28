import React from 'react';
import { Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header, Title, Left, Right, Body} from 'native-base'; //For tab bar
import { style } from "./style";
import { Card, CardItem, Icon, Text, Thumbnail} from 'native-base'; //For card view


export class Group extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'Group',
		tabBarIcon: ({tintColor}) => (<MaterialIcons size={24} color="#ffffff" name='group'/>)
	};

	constructor(props) {
		super(props);
		this.state = {		
			eventsChatGroupList:[{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '111', eventLastMsg: 'Hello everyone!'},
						{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '112', eventLastMsg: 'Hello everyone!'},
						{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '113', eventLastMsg: 'Hello everyone!'},
						{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '114', eventLastMsg: 'Hello everyone!'},
						{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '115', eventLastMsg: 'Hello everyone!'},
			]
		};
	}

	getEventsChatGroup(){
		var json = this.state.eventsList;
		for (let eventItem in json) {
			array.push(data[prop]);
		}
	}
	render() {
		return (
			<Content>
				<Header style={style.Header} >
					<Body>
						<Title>Group Chat</Title>
					</Body>
				</Header>
				{/* {initialArr.map((prop, key) => {
					return (
					<Button  key={key}>{prop.}</Button>
					);
				})} */}
				{/* <Card>
					<CardItem>
						<Icon active name="logo-googleplus" />
						<Text>Google Plus</Text>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</CardItem>
				</Card> */}
				        {/* <FlatList
					data={[
						{key: 'Devin'},
						{key: 'Jackson'},
						{key: 'James'},
						{key: 'Joel'},
						{key: 'John'},
						{key: 'Jillian'},
						{key: 'Jimmy'},
						{key: 'Julie'},
					]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
					/>
					<SectionList
						sections={[
							{title: 'D', data: ['Devin']},
							{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
						]}
						renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
						renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
					/> */}
				<Card>
					<CardItem>
						<Left>
						<Thumbnail source={{uri: 'https://firebasestorage.googleapis.com/v0/b/friendlychat-49fcf.appspot.com/o/pexels-photo.jpg?alt=media&token=29881396-d6fd-4bf0-b9d0-09a2a64906ba'}} />
						<Body>
							<Text>First Group</Text>
							<Text note>Hello</Text>
						</Body>
						</Left>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<Left>
						<Thumbnail source={{uri: 'https://firebasestorage.googleapis.com/v0/b/friendlychat-49fcf.appspot.com/o/pexels-photo.jpg?alt=media&token=29881396-d6fd-4bf0-b9d0-09a2a64906ba'}} />
						<Body>
							<Text>Group2</Text>
							<Text note>Hi</Text>
						</Body>
						</Left>
					</CardItem>
				</Card>
			</Content>
		);
	}

}

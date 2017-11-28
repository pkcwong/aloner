import React from 'react';
import { Image, ScrollView, View,Dimensions,Alert,disabled,onPress} from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Icon, Left,Button,Badge } from 'native-base';
import { style } from "./style";
import firebase from 'react-native-firebase';

var { width, height } = Dimensions.get('window');

export class EventDetail extends React.Component {

	static navigationOptions = {
		title: 'EventDetail',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			eventsList:[{eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventDate:'20/11/2107', eventTime:'11:00-18:00',eventLocation:'HKUST,LG7',eventVacancy:'10',peopleJoined:'5',eventOrganizer:'Ada Yung', evetDescription:'This is a very long event description for testing.\n\nThis is a very long event description for testing.\n\nThis is a very long event description for testing.\n\nThis is a very long event description for testing.\n\nThis is a very long event description for testing.\n\n'}]
		};
	}

render() {

	let Arr = this.state.eventsList.map((a, i) => {
		return(
			<Content key={i} style={{backgroundColor:'white'}}>
				<View style={{alignItems: 'center', marginTop:20}}>
					<Thumbnail square source={{uri: a.eventImage}} style={{width:130, height:130, borderRadius: 10}}/>
					<Text style={{fontSize: 20, color:'#0496cc', fontWeight: 'bold',marginTop:10}}>Hiking</Text>
				</View>
				<View style={{borderBottomColor: '#e3e5e8', borderBottomWidth: 2, width: width, marginTop:10}}></View>
				<View style={{height:50,flexDirection:'row',marginTop:10}}>
					<View style={ {flex:1,margin:5}}>
						<Button  small  warning onPress={() => Alert.alert('','Bookmarked',)}><Text style={{fontSize:12}}> Bookmark </Text></Button>
					</View>
					<View style={ {flex:1,margin:5}}>
						<Button  small  primary><Text style={{fontSize:12}}> Chat Room </Text></Button>
					</View>
					<View style={ {flex:1,margin:5}}>
						<Button  small  success onPress={() => Alert.alert('','Event Joined',)}><Text style={{fontSize:12}}> Join Event</Text></Button>
					</View>
				</View>
				<View style={{borderBottomColor: '#e3e5e8', borderBottomWidth: 2, width: width, marginTop:5}}></View>
				<View style={ {flexDirection:'row',marginTop:10, marginLeft:30}}>
					<View style={ {flex:1,margin:5}}>
						<Icon name="time" style={{color: 'gray',fontSize: 22}}/>
					</View>
					<View style={ {flex:2,margin:5}}>
						<Text style={style.detailTitle}>Date :</Text>
					</View>
					<View style={ {flex:3,margin:5}}>
						<Text style={style.detailDescription}>{a.eventDate}</Text>
					</View>
				</View>
				<View style={ {flexDirection:'row',marginTop:5, marginLeft:30}}>
					<View style={ {flex:1,margin:5}}>
						<Icon name="calendar" style={{color: 'gray',fontSize: 22}}/>
					</View>
					<View style={ {flex:2,margin:5}}>
						<Text style={style.detailTitle}>Time :</Text>
					</View>
					<View style={ {flex:3,margin:5}}>
						<Text style={style.detailDescription}>{a.eventTime}</Text>
					</View>
				</View>
				<View style={ {flexDirection:'row',marginTop:5, marginLeft:30}}>
					<View style={ {flex:1,margin:5}}>
						<Icon name="globe" style={{color: 'gray',fontSize: 22}}/>
					</View>
					<View style={ {flex:2,margin:5}}>
						<Text style={style.detailTitle}>Location :</Text>
					</View>
					<View style={ {flex:3,margin:5}}>
						<Text style={style.detailDescription}>{a.eventLocation}</Text>
					</View>
				</View>
				<View style={ {flexDirection:'row',marginTop:5, marginLeft:30}}>
					<View style={ {flex:1,margin:5}}>
						<Icon name="people" style={{color: 'gray',fontSize: 22}}/>
					</View>
					<View style={ {flex:2,margin:5}}>
						<Text style={style.detailTitle}>Vacancy :</Text>
					</View>
					<View style={ {flex:3,margin:5}}>
						<Text style={style.detailDescription}>{a.eventVacancy}   
						<Text style={{fontSize:10,color: 'gray'}}>	({Number.parseInt(a.eventVacancy, 10)-Number.parseInt(a.peopleJoined, 10)} Places Left)</Text>
						</Text>
					</View>
				</View>
				<View style={ {flexDirection:'row',marginTop:5, marginLeft:30}}>
					<View style={ {flex:1,margin:5}}>
						<Icon name="thumbs-up" style={{color: 'gray',fontSize: 22}}/>
					</View>
					<View style={ {flex:2,margin:5}}>
						<Text style={style.detailTitle}>Organizer :</Text>
					</View>
					<View style={ {flex:3,margin:5}}>
						<Text style={style.detailDescription}>{a.eventOrganizer}</Text>
					</View>
				</View>
				<View style={{borderBottomColor: '#e3e5e8', borderBottomWidth: 2, width: width, marginTop:10}}></View>
				
				<View style={ {margin:5}}>
					<Text style={style.detailTitle}>Description:</Text>
				</View>
				<View style={ {margin:5, marginLeft:30}}>
					<Text style={style.detailDescription}>{a.evetDescription}</Text>
				</View>
				
			</Content>
		);
	}) 
	
	return (

		<ScrollView>
               {Arr}
		</ScrollView>
    );
  }
		
}

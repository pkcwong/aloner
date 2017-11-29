import React from 'react';
import { Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header, Title, Left, Right, Body} from 'native-base'; //For tab bar
import { style } from "./style";
import { Card, CardItem, Icon, Text, Thumbnail} from 'native-base'; //For card view
import { Image } from 'native-base';


export class Group extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'Group',
		tabBarIcon: ({tintColor}) => (<MaterialIcons size={24} color="#ffffff" name='group'/>)
	};

	constructor(props) {
		super(props);
		this.state = {		
			eventsChatGroupList:[
						// {eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '111', eventLastMsg: 'Hello everyone!'},
						// {eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '112', eventLastMsg: 'Hello everyone!'},
						// {eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '113', eventLastMsg: 'Hello everyone!'},
						// {eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '114', eventLastMsg: 'Hello everyone!'},
						// {eventImage: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', eventName:'Hiking', eventId: '115', eventLastMsg: 'Hello everyone!'},
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
				<Card>
					<CardItem>
						<Left>
						<Thumbnail source={{uri: 'https://static.pexels.com/photos/172738/pexels-photo-172738.jpeg'}} />
						<Body>
							<Text>One person Group</Text>
							<Text note>Hi! Is anyone here?</Text>
						</Body>
						</Left>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<Left>
						<Thumbnail source={{uri: 'https://static.pexels.com/photos/582428/pexels-photo-582428.jpeg'}} />
						<Body>
							<Text>No Together Group</Text>
							<Text note>Hello</Text>
						</Body>
						</Left>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<Left>
						<Thumbnail source={{uri: 'https://static.pexels.com/photos/14737/pexels-photo.jpg'}} />
						<Body>
							<Text>Lunch Group</Text>
							<Text note>Will all of you be freee at 12:30pm?</Text>
						</Body>
						</Left>
					</CardItem>
				</Card>
			</Content>
		);
	}

}

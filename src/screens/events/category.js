import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { style } from "./style";
import firebase from 'react-native-firebase';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export class Category extends React.Component {
	static navigationOptions = {
		header: null,
		tabBarLabel: 'Events',
		tabBarIcon: ({ tintColor }) => (<MaterialIcons size={30} color="#ffffff" name='event' />)
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<Container>
				<Header />
				<Content>
					<List style={{ backgroundColor: 'white' }}>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"food"}))}>
							<Left>
								<Icon name="pizza" style={{ color: 'red' }} />
							</Left>
							<Body>
								<Text>Food</Text>
							</Body>
						</ListItem>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"sport"}))}>
							<Left>
								<Icon name="basketball" style={{ color: 'orange' }} />
							</Left>
							<Body>
								<Text>Sports</Text>
							</Body>
						</ListItem>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"study"}))}>
							<Left>
								<Icon name="book" style={{ color: 'blue' }} />
							</Left>
							<Body>
								<Text>Study</Text>
							</Body>
						</ListItem>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"Volunteer"}))}>
							<Left>
								<Icon name="heart" style={{ color: 'red' }} />
							</Left>
							<Body>
								<Text>Volunteer</Text>
							</Body>
						</ListItem>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"workshop"}))}>
							<Left>
								<Icon name="clipboard" style={{ color: 'green' }} />
							</Left>
							<Body>
								<Text>Extracurricular Workshop</Text>
							</Body>
						</ListItem>
						<ListItem icon onPress={() => (this.props.navigation.navigate('Events',{ename:"party"}))}>
							<Left>
								<Icon name="musical-notes" style={{ color: 'black' }} />
							</Left>
							<Body>
								<Text>Party</Text>
							</Body>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}


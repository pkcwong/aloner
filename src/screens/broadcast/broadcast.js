import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { style } from "./style";
import { HOST } from "../../lib/server/server";
import firebase from 'react-native-firebase';
import { Header, Title, Left, Right, Body} from 'native-base';
// Container, Content, Footer, FooterTab, Button, Icon, Text 
export class Broadcast extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'Broadcast',
		tabBarIcon: ({tintColor}) => (<MaterialIcons size={30} color="#ffffff" name='wifi-tethering'/>)
	};

	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			user: {}
		};
	}

	componentWillMount() {
		AsyncStorage.getItem('@aloner:broadcasts').then((res) => {
			let cache = JSON.parse(res);
			if (cache && cache['messages']) {
				this.setState({
					messages: cache['messages']
				});
			} else {
				this.setState({
					messages: []
				});
			}
			if (cache && cache['user']) {
				this.setState({
					user: cache['user']
				});
			} else {
				this.setState({
					user: {}
				});
			}
			this.refresher();
		}).catch((err) => {
			console.log(err);
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				fetch(HOST + '/api/user', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						uid: user.uid
					})
				}).then((response) => {
					response.json().then((doc) => {
						this.setState({
							user: {
								_id: user.uid,
								name: doc['firstname'] + ' ' + doc['lastname']
							}
						});
						AsyncStorage.setItem('@aloner:broadcasts', JSON.stringify(this.state)).catch((err) => {
							console.error(err);
						});
					});
				});
			}
		});
		firebase.messaging().onMessage((payload) => {
			this.refresher();
		});
	}

	render() {
		return (
			<View
				style={style.view}
			>
				<Header style={style.Header} >
					{/* <Left>
						<Button transparent>
						<Icon name='menu' />
						</Button> 
					</Left> */}
					<Body>
						<Title>Messages Nearby</Title>
					</Body>
					
				</Header>
				<GiftedChat
					messages={this.state.messages}
					onSend={(messages) => this.onSend(messages)}
					user={this.state.user}
				/>
			</View>
		);
	}

	refresher() {
		fetch(HOST + '/api/broadcast', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				method: 'dump',
				createdAt: this.state.messages.length > 0 ? this.state.messages[0]['createdAt'] : 0
			})
		}).then((response) => {
			response.json().then((data_msg) => {
				data_msg.forEach((item) => {
					fetch(HOST + '/api/user', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							uid: item['user']['_id']
						})
					}).then((response) => {
						response.json().then((data_user) => {
							item['user']['name'] = data_user['firstname'] + ' ' + data_user['lastname'];
							this.setState({
								messages: this.state.messages.concat(item).sort((a, b) => {
									if (a['createdAt'] < b['createdAt']) {
										return 1;
									} else {
										return -1;
									}
								})
							});
							AsyncStorage.setItem('@aloner:broadcasts', JSON.stringify(this.state)).catch((err) => {
								console.error(err);
							});
						}).catch((err) => {
							console.error(err);
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

	onSend(messages) {
		if (firebase.auth().currentUser) {
			firebase.auth().currentUser.getIdToken().then((token) => {
				messages.forEach((item) => {
					fetch(HOST + '/api/broadcast', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							method: 'send',
							token: token,
							text: item['text']
						})
					}).catch((err) => {
						console.error(err);
					});
				});
			}).catch((err) => {
				console.error(err);
			});
		} else {
			this.props.navigation.navigate('Login');
		}
	}

}

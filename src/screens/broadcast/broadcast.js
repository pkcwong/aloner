import React from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { style } from "./style";

let firebase = require('firebase');

export class Broadcast extends React.Component {

	static navigationOptions = {
		title: 'Broadcast',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};
	}

	componentWillMount() {
		if (firebase.auth().currentUser) {

		} else {
			this.props.navigation.navigate('Login');
		}
	}

	render() {
		return (
			<View
				style={style.view}
			>
				<GiftedChat
					messages={this.state.messages}
				/>
			</View>
		);
	}

}

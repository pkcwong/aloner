import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'nachos-ui';
import { style } from "./style";

let firebase = require('firebase');

export class Login extends React.Component {

	static navigationOptions = {
		title: 'Login',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		return (
			<View>
				<Input
					style={style.email}
					autoCapitalize='none'
					autoCorrect={false}
					autoFocus={true}
					keyboardType='email-address'
					placeholder='email'
					value={this.state.email}
					onChangeText={(value) => {
						this.setState({
							email: value
						});
					}}
				/>
				<Input
					style={style.password}
					autoCapitalize='none'
					autoCorrect={false}
					secureTextEntry={true}
					placeholder='password'
					value={this.state.password}
					onChangeText={(value) => {
						this.setState({
							password: value
						});
					}}
				/>
				<Button
					style={style.login}
					onPress={() => {
						firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
							this.props.navigation.goBack();
						}).catch((err) => {
							console.log(err);
						});
					}}
				>
					Login
				</Button>
			</View>
		);
	}

}

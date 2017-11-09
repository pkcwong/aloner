import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'nachos-ui';

import { style } from "./style";

export class Login extends React.Component {

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
						console.log("Button pressed!");
					}}
				>
					Login
				</Button>
			</View>
		);
	}

}

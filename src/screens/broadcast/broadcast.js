import React from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { style } from "./style";

export class Broadcast extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};
	}

	componentWillMount() {

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

import React from 'react';
import { Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header, Title, Left, Right, Body} from 'native-base';
import { style } from "./style";

export class Group extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'Group',
		tabBarIcon: ({tintColor}) => (<MaterialIcons size={30} color="#ffffff" name='group'/>)
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Content>
				<Header style={style.Header} >
					<Body>
						<Title>Group Chat</Title>
					</Body>
				</Header>
			</Content>
		);
	}

}

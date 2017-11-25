import React from 'react';
import { Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Group extends React.Component {

	static navigationOptions = {
		title: 'Group',
		header: null,
		tabBarLabel: 'Group',
		tabBarIcon: ({tintColor}) => (<MaterialIcons name='group'/>)
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Content>

			</Content>
		);
	}

}

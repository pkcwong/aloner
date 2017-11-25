import React from 'react';
import { Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Event extends React.Component {

	static navigationOptions = {
		title: 'Event',
		header: null,
		tabBarLabel: 'Event',
		tabBarIcon: ({tintColor}) => (<MaterialIcons name='event'/>)
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

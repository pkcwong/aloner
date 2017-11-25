import React from 'react';
import { Container, Footer, FooterTab, Button, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Broadcast } from "../broadcast/broadcast";
import { Event } from "../Event/event";
import { Group } from "../Group/group";

export class Tab extends React.Component {

	static navigationOptions = {
		title: 'Tab',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			display: () => {
				return <Event/>;
			}
		};
	}

	render() {
		return (
			<Container>
				{this.state.display()}
				<Footer>
					<FooterTab>
						<Button vertical
						        onPress={() => this.setState({
							        display: () => {
								        return <Broadcast/>;
							        }
						        })}
						>
							<MaterialIcons name="chat"/>
							<Text>Broadcasts</Text>
						</Button>
						<Button vertical
						        onPress={() => this.setState({
							        display: () => {
								        return <Event/>;
							        }
						        })}>
							<MaterialIcons name="search"/>
							<Text>Events</Text>
						</Button>
						<Button vertical
						        onPress={() => this.setState({
							        display: () => {
								        return <Group/>;
							        }
						        })}
						>
							<MaterialIcons name="group"/>
							<Text>Groups</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}

}

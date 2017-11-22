import { StackNavigator } from 'react-navigation';
import { Login } from "./login/login";
import { Broadcast } from "./broadcast/broadcast";
import { Events } from "./events/events";

export const NavigationStack = StackNavigator(
	{
		Login: {
			screen: Login
		},
		Broadcast: {
			screen: Broadcast
		},
		Events: {
			screen: Events
		},
	},
	{
		initialRouteName: 'Events'
	}
);

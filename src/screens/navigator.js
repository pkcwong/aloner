import { StackNavigator } from 'react-navigation';
import { Login } from "./login/login";
import { Broadcast } from "./broadcast/broadcast";

export const NavigationStack = StackNavigator(
	{
		Login: {
			screen: Login
		},
		Broadcast: {
			screen: Broadcast
		}
	},
	{
		initialRouteName: 'Broadcast'
	}
);

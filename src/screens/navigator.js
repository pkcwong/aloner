import { StackNavigator } from 'react-navigation';
import { Tab } from "./tab/tab";
import { Login } from "./login/login";
import { Broadcast } from "./broadcast/broadcast";

export const NavigationStack = StackNavigator(
	{
		Tab: {
			screen: Tab
		},
		Login: {
			screen: Login
		},
		Broadcast: {
			screen: Broadcast
		}
	},
	{
		initialRouteName: 'Tab'
	}
);

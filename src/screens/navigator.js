import { StackNavigator } from 'react-navigation';
import { Tab } from "./tab/tab";
import { Login } from "./login/login";

export const NavigationStack = StackNavigator(
	{
		Tab: {
			screen: Tab
		},
		Login: {
			screen: Login
		}
	},
	{
		initialRouteName: 'Tab'
	}
);

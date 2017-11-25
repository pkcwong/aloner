import { StackNavigator } from 'react-navigation';
import { Login } from "./login/login";
import { Broadcast } from "./broadcast/broadcast";
import { Events } from "./events/events";
import { Category } from "./events/category";

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
		Category: {
			screen: Category
		},
	},
	{
		initialRouteName: 'Category'
	}
);

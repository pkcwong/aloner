import { StackNavigator } from 'react-navigation';
import { Tab } from "./tab/tab";
import { Login } from "./login/login";
import { CreateEvent} from "./events/createEvent";
export const NavigationStack = StackNavigator(
	{
		Tab: {
			screen: Tab
		},
		Login: {
			screen: Login
		},
		CreateEvent: {
			screen: CreateEvent
		}
	},
	{
		initialRouteName: 'Tab'
	}
);

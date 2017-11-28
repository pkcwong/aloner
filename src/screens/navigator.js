import { StackNavigator } from 'react-navigation';
import { Tab } from "./tab/tab";
import { Login } from "./login/login";
import { CreateEvent} from "./events/createEvent";
import { Events } from "./events/events";
import { EventDetail } from "./events/eventDetail";

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
		},
		Events:{
			screen:Events
		},
		EventDetail:{
			screen:EventDetail
		}
	},
	{
		initialRouteName: 'Tab'
	}
);

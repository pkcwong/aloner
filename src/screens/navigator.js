import { StackNavigator } from 'react-navigation';
import { Login } from "./login/login";
import { Broadcast } from "./broadcast/broadcast";
import { Events } from "./events/events";
import { Category } from "./events/category";
import { EventDetail } from "./events/eventDetail";
import { CreateEvent} from "./events/createEvent";


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
		EventDetail: {
			screen: EventDetail
		},
		CreateEvent: {
			screen: CreateEvent
		},
	},
	{
		initialRouteName: 'Category'
	}
);

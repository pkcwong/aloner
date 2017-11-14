import { AppRegistry } from 'react-native';
import { NavigationStack } from "./src/screens/navigator";
import { FIREBASE_CONFIG } from "./src/lib/server/server";
import firebase from 'react-native-firebase';

AppRegistry.registerComponent('aloner', () => {
	firebase.initializeApp(FIREBASE_CONFIG);
	firebase.messaging().getToken().then((token) => {
		console.log(token);
	});
	return NavigationStack;
});

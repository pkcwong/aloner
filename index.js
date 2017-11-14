import { AppRegistry } from 'react-native';
import { NavigationStack } from "./src/screens/navigator";
import { FIREBASE_CONFIG } from "./src/lib/server/server";
import firebase from 'react-native-firebase';

AppRegistry.registerComponent('aloner', () => {
	firebase.initializeApp(FIREBASE_CONFIG);
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			firebase.messaging().getToken().then((token) => {

			}).catch((err) => {
				console.error(err);
			});
		}
	});

	return NavigationStack;
});

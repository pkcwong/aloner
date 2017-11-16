import { AppRegistry } from 'react-native';
import { NavigationStack } from "./src/screens/navigator";
import { FIREBASE_CONFIG } from "./src/lib/server/server";
import firebase from 'react-native-firebase';
import { HOST } from "./src/lib/server/server";

AppRegistry.registerComponent('aloner', () => {
	firebase.initializeApp(FIREBASE_CONFIG);
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			firebase.auth().currentUser.getIdToken().then((token) => {
				firebase.messaging().getToken().then((fcm) => {
					fetch(HOST + '/api/messaging', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							method: 'update',
							token: token,
							fcm: fcm
						})
					}).catch((err) => {
						console.error(err);
					});
				}).catch((err) => {
					console.error(err);
				});
			}).catch((err) => {
				console.error(err);
			});
		}
	});
	firebase.messaging().subscribeToTopic('broadcast');
	return NavigationStack;
});

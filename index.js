import { AppRegistry } from 'react-native';
import { NavigationStack } from "./src/screens/navigator";
import { FIREBASE_CONFIG } from "./src/lib/server/server";

const firebase = require('firebase');

AppRegistry.registerComponent('aloner', () => {
	firebase.initializeApp(FIREBASE_CONFIG);
	return NavigationStack;
});

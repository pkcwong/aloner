import { AppRegistry } from 'react-native';
import { NavigationStack } from "./src/screens/navigator";

const firebase = require('firebase');

AppRegistry.registerComponent('aloner', () => {
	let config = {
		apiKey: "AIzaSyBBlMxoUFYISp1HZ11GB9AUM5fBTpuDtjc",
		authDomain: "aloner-firebase.firebaseapp.com",
		databaseURL: "https://aloner-firebase.firebaseio.com",
		projectId: "aloner-firebase",
		storageBucket: "aloner-firebase.appspot.com",
		messagingSenderId: "1035212202971"
	};
	firebase.initializeApp(config);
	return NavigationStack;
});

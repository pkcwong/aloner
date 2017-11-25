import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Broadcast } from "../broadcast/broadcast";
import { Event } from "../Event/event";
import { Group } from "../Group/group";

export const Tab = TabNavigator(
	{
		Broadcast: {screen: Broadcast},
		Event: {screen: Event},
		Group: {screen: Group}
	},
	{
		tabBarOptions: {
			activeTintColor: '#FFFFFF',
			labelStyle: {
				fontSize: 16,
				fontWeight: '600'
			},
			showIcon: true
		},
		tabBarPosition: 'bottom'
	}
);

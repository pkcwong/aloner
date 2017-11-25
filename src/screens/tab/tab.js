import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Broadcast } from "../broadcast/broadcast";
import { Events } from "../events/events";
import { Group } from "../groups/groups";

export const Tab = TabNavigator(
	{
		Broadcast: {screen: Broadcast},
		Events: {screen: Events},
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

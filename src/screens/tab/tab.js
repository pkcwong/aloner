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
			inactiveTintColor: '#FFFFFF',
			activeTintColor: '#FFFF00',
			labelStyle: {
				fontSize: 14,
				fontWeight: '600'
			},
			style: {
				backgroundColor: '#5FAAFA',
			},
			showIcon: true,
			iconStyle: {
				width: 100
			}
		},
		tabBarPosition: 'bottom'
	}
);

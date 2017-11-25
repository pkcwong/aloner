import React from 'react';
import { Image, ScrollView, View,Text, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { style } from "./style";
import firebase from 'react-native-firebase';

export class Category extends React.Component {

	static navigationOptions = {
		title: 'Category',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

render() {
	
	return (
      <ScrollView>
				<View style={ {flexDirection:'row',height:100,marginTop:20}}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}> 
								<View style={ {flex:3,backgroundColor:"blue",margin:5}}>
								<Icon name='home' style={{fontSize: 60, color: 'white'}} />
								<Text style={ {fontSize:16}}>Food</Text>
								</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() =>this.props.navigation.navigate('Events')}>
								<View style={ {flex:3,backgroundColor:"blue",margin:5}}>
								<Icon name='home' style={{fontSize: 60, color: 'white'}} />
								<Text style={ {fontSize:16}}>Food</Text>
								</View>
						</TouchableOpacity>     
				</View>
      </ScrollView>
    );
  }
		
}

import React from 'react';
import { Image, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { style } from "./style";
import firebase from 'react-native-firebase';

export class Tab1 extends React.Component {

	static navigationOptions = {
		title: 'Tab1',
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
        <Content style={{margin:20}}>
          <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
		  <Card style={style.cards}>
            <CardItem>
				<Left>
					 <Image source={{uri: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'}} style={{height: 130, width: 130}}/>
                </Left>
				<Body>
					<Text style={style.title}>Hiking</Text>
					<View style={{flexDirection:'row',marginTop:5}}>
						<View style={{margin:2}}>
						  <Text style={style.description}>Date:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>21/11/2017</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Time:</Text>
					    </View>
					    <View style={ {margin:2}}>
						  <Text style={style.description}>15:00-18:00</Text>
					    </View>
					</View>
					<View style={ {flexDirection:'row',marginTop:2}}>
						<View style={ {margin:2}}>
						  <Text style={style.description}>Location:</Text>
					    </View>
					    <View style={{margin:2}}>
						  <Text style={style.description}>HKUST</Text>
					    </View>
					</View>
				</Body>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    );
  }
		
}

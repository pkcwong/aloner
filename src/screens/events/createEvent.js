import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,disabled,onPress,Dimensions,Platform 
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
  
import { Container, Header, Content, Thumbnail, Icon, Text, Left,Button,Badge,Form, Item, Input, Label,TextInput,Picker} from 'native-base';
import { style } from "./style";
import firebase from 'react-native-firebase';
import { HOST } from "../../lib/server/server";

var { width, height } = Dimensions.get('window');
export class CreateEvent extends React.Component {

    selectPhotoTapped() {
        const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
            skipBackup: true
        }
        };

        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled photo picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({

            ImageSource: source

            });
        }
        });
    }

	static navigationOptions = {
		title: 'CreateEvent',
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			ImageSource:null,
			selected2: "",
			eventName:"",
			eventDate:"",
			eventTimeStart:"",
			eventTimeEnd:"",
			eventLocation:"",
			eventVacancy:"",
			eventDescription:"",
		};
	}

	onValueChange2(value) {
		this.setState({
		  selected2: value
		});
	  }

render() {
	
	
	return (
		<ScrollView style={{backgroundColor:'#d0d6e0'}}>
			<View style={{margin:10, backgroundColor:'white'}}>
				<View style={styles.container}>
		
				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
					<View style={styles.ImageContainer}>
					{ this.state.ImageSource === null ? <Image style={styles.ImageContainer} source={{uri:'https://maxcdn.icons8.com/Share/icon/Photo_Video//add_image1600.png'}}/> :
					<Image style={styles.ImageContainer} source={this.state.ImageSource}/>
					}
		
					</View>
		
				</TouchableOpacity>
				</View>


				<Form style={{margin:30, backgroundColor:'white'}}>
				<Item floatingLabel>
				<Label>Event Name:</Label>
				<Input 
					value={this.state.eventName}
					onChangeText={(value) => {
						this.setState({
							eventName: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel>
				<Label>Date:</Label>
				<Input 
					value={this.state.eventDate}
					onChangeText={(value) => {
						this.setState({
							eventDate: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel>
				<Label>Time Start:</Label>
				<Input 
					value={this.state.eventTimeStart}
					onChangeText={(value) => {
						this.setState({
							eventTimeStart: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel>
				<Label>Time End:</Label>
				<Input 
					value={this.state.eventTimeEnd}
					onChangeText={(value) => {
						this.setState({
							eventTimeEnd: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel >
				<Label>Location:</Label>
				<Input 
					value={this.state.eventLocation}
					onChangeText={(value) => {
						this.setState({
							eventLocation: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel >
				<Label>Vacancy:</Label>
				<Input 
					value={this.state.eventVacancy}
					onChangeText={(value) => {
						this.setState({
							eventVacancy: value
						});
					}}
				/>
				</Item>
				<Item floatingLabel last>
				<Label>Description:</Label>
				<Input 
					value={this.state.eventDescription}
					onChangeText={(value) => {
						this.setState({
							eventDescription: value
						});
					}}
				/>
				</Item>
				<Picker
					mode="dialog"
					selectedValue={this.state.selected2}
					onValueChange={(selectedValue)=>{
						this.setState({
							selected2: selectedValue
						});
					}}
					style={{margin:8, marginTop:25}}
				>
					<Item label="Category:" value="" />
					<Item label="Food" value="food" />
					<Item label="Sports" value="sport" />
					<Item label="Study" value="studys" />
					<Item label="Volunteer" value="volunteer"/>
					<Item label="Extracurricular Workshop" value="workshop"/>
					<Item label="Party" value="party"/>
				</Picker>
				</Form>
				<Button block info style={{margin:20}} onPress={() => {this.onSend(), Alert.alert('','Event Created',)}}>
					<Text>Create	Event</Text>
				</Button>
			</View>
		</ScrollView>
      );
  }

  onSend() {
	if (firebase.auth().currentUser) {
		firebase.auth().currentUser.getIdToken().then((token) => {
			
				fetch(HOST + '/api/events', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						method: 'create',
						token: token,
						category: this.state.selected2,
						description: this.state.eventDescription,
						location:this.state.eventLocation,
						quota:this.state.eventVacancy,
						time:{
							start:this.state.eventTimeStart,
							end:this.state.eventTimeEnd,
						}
					})
				}).then(() => {
					this.props.navigation.goBack();
				}).catch((err) => {
					console.error(err);
				});
		
		}).catch((err) => {
			console.error(err);
		});
	} else {
		this.props.navigation.navigate('Login');
	}
}
		
}

const styles = StyleSheet.create({
    
       container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
		 backgroundColor: 'white',
		 marginTop:30,
       },
    
       ImageContainer: {
         borderRadius: 10,
         width: 150,
         height: 150,
         borderColor: 'gray',
         borderWidth: 1 / PixelRatio.get(),
         justifyContent: 'center',
         alignItems: 'center',
		 backgroundColor: '#e6eaf2',
         
	   },
    
});

import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'nachos-ui';

import { style } from "./style";

let firebase = require('firebase');

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }
    render() {
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    resizeMode={'center'}
                    source={{uri: 'https://protoio.s3.amazonaws.com/ericyu-534797-proto/projects/44d9ae65-4bf3-4bf1-bfe2-422574acc867/assets/f1507621886463/e12ce6615833a4078342499c1e6a028a.png?AWSAccessKeyId=AKIAIK3DUR7RE5WBTUXA&Expires=1511422174&Signature=zL%2F%2BN7mWInhtNtu7KFoZtrIl68g%3D&response-cache-control=max-age%3D1296000'}}
                />
                <Input
                    style={style.name}
                    autoCapitalize='words'
                    autoCorrect={false}
                    autoFocus={true}
                    placeholder='User Name'
                    value={this.state.name}
                    onChangeText={(value) => {
                        this.setState({
                            name: value
                        });
                    }}
                />
                <Input
                    style={style.email}
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType='email-address'
                    placeholder='email'
                    value={this.state.email}
                    onChangeText={(value) => {
                        this.setState({
                            email: value
                        });
                    }}
                />
                <Input
                    style={style.password}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={(value) => {
                        this.setState({
                            password: value
                        });
                    }}
                />
                <Button
                    style={style.signup}
                    color='#7DD7E3'
                    title='Sign Up'
                    onPress={() => {
                        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                            console.log("Sign up successfully");
                        }).catch((err) => {
                            console.log(err);
                        });
                    }}
                >
                </Button>
            </View>
        );
    }

}

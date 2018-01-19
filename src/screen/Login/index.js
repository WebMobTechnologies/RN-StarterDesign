/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image, ScrollView,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";
import PasswordInputText from "../../component/ui/PasswordInputText";
import {validation} from "../../utils/validate";
import {NavigationActions} from "react-navigation";


export default class Login extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            pwdError: '',
            data: ''
        };

    }

    loginClick = () => {
        let emailErr = validation("email", this.state.email);
        let pwdErr = validation("password", this.state.password);

        if (emailErr != null || pwdErr != null) {
            this.setState({
                emailError: emailErr,
                pwdError: pwdErr,
            });
        }
        else {
            this.setState({
                emailError: '',
                pwdError: '',
            });

            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({routeName: 'Authorized'})]
            }));
        }

    };


    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.textViewLogin}>
                            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>
                        </View>
                        <View style={styles.newLoginBind}>
                            <FloatingInputText tfLabel='Email'
                                               error={this.state.emailError}
                                               keybordType="email-address"
                                               onChangeText={(email) => this.setState({email})}/>
                            <PasswordInputText
                                error={this.state.pwdError}
                                onChangeText={(password) => this.setState({password})}/>
                            <View style={styles.btnLogin}>
                                <RoundButton onClick={this.loginClick}
                                             name="LOGIN"
                                             btnMarTop={15}
                                />

                            </View>
                            <Text onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                  style={styles.forgotPass}>Forgot Password?</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        );
    }
}


//get Method

/*
     const instance = axios.create({
            baseURL: 'https://reqres.in/api/users',
            timeout: 1000,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });

  axios.get(root+'/posts/1')
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.log(error);
       });
*/

//Post Method

/*    axios.post('https://reqres.in/api/users/2',instance).then(function(response) {
         console.log(response);
     }).catch(function (error) {
         console.log(error);
     });
*/
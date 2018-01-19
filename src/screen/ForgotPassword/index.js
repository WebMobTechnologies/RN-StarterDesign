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
    Alert
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";
import {validation} from "../../utils/validate";

export default class ForgotPassword extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
        };
    }

    onclick = () => {
        let emailErr = validation("email", this.state.email);
        if ((emailErr != null)) {
            this.setState({
                emailError: emailErr,
            });
        }
        else {
            this.setState({
                emailError: '',
            });
            Alert.alert("Email send");
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewForPass}>
                        <Text style={styles.largeText}>Reset Password</Text>
                        <Text style={styles.smallText}>Enter email and we'll send you a link</Text>
                        <Text style={styles.smallText}>to reset password</Text>
                    </View>
                    <View style={styles.newForPassBind}>
                        <View style={styles.itEmail}>
                            <FloatingInputText
                                tfLabel='Email'
                                error={this.state.emailError}
                                keybordType="email-address"
                                onChangeText={(email) => this.setState({email})}/>
                        </View>
                        <RoundButton onClick={this.onclick}
                                     name="LOGIN"
                                     btnPadding={7}
                                     btnHeight={35}
                                     btnWidth={270}
                                     btnMarTop={15}/>
                    </View>

                </View>
            </View>

        );
    }
}


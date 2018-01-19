/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text, Image,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import {NavigationActions} from "react-navigation";
export default class Home extends Component<{}> {
    loginClick = () => {

        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key:null,
            actions: [NavigationActions.navigate({ routeName: 'Unauthorized' })]
        }));

    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>
               <View style={styles.subHeader}>
                 <Text style={styles.txtWelcome}>Welcome User</Text>
                <Text style={{marginTop:10}}>We offer Mobile Apps</Text>
                <Text>We offer Web Apps</Text>
                   <Text>UI/UX</Text>
                <Text>IT Consulting</Text>
                <Text>Project Management</Text>
                <Text>DevOps Services</Text>
               </View>
                <View style={{marginTop:40}}>
                <RoundButton onClick={this.loginClick}
                             name="LOGOUT"
                             btnMarTop={15}
                />
                </View>
            </View>
        );
    }
}



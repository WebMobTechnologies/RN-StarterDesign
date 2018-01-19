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
    Image,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import {Color} from "../../utils/color";
import * as constants from "../../utils/constants";

export default class Main extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textView}>
                        <Image style={styles.logoImage} source={require('../../assets/images/logo.png')}/>
                        <Text style={styles.largeText}>Welcome User</Text>
                        <Text style={styles.smallText}>Custom Mobile and Web App Development  </Text>
                    </View>

                    <RoundButton
                        onClick={() => this.props.navigation.navigate('Login')}
                                 name="LOGIN"
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                                 sm={true}
                    />
                    <RoundButton
                        onClick={() => this.props.navigation.navigate('Signup')}
                                 name="SIGNUP"
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                    />
                    <RoundButton onClick={() =>  this.props.navigation.navigate('Main')}
                                 name="LOGIN WITH FACEBOOK"
                                 btnPadding={7}
                                 btnBgColor={Color.INDIGO["900"]}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                    />
                </View>
            </View>
        );
    }
}


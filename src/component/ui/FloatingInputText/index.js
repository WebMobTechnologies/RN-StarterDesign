/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import TextField from "react-native-material-textfield/src/components/field/index";
import PropTypes from "prop-types";
import {Color} from "../../../utils/color";


export default class FloatingInputText extends Component<{}> {
    render() {
        return (
            <View>
                <TextField
                    {...this.props}
                    label={this.props.tfLabel}
                    baseColor={Color.GREY["900"]}
                    textColor={Color.GREY["900"]}
                    tintColor={Color.GREY["900"]}/>
            </View>
        );
    }
}

FloatingInputText.propTypes = {
    tfLabel: PropTypes.string,
};
FloatingInputText.defaultProps = {
    tfLabel: "",
};


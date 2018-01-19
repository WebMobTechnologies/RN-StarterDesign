import {StackNavigator} from "react-navigation";
import Main from "../screen/Main";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import ForgotPassword from "../screen/ForgotPassword";
import Home from "../screen/Home";
import {Color} from "../utils/color";

export const AuthorizedNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        },
        initialRouteName: 'Home'
    },
});
export const UnauthorizedNavigator = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Main',
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Signup',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },

    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        },
        initialRouteName: 'Main'
    },


});

export const AppNavigator = StackNavigator({
    Unauthorized: {
        screen: UnauthorizedNavigator, navigationOptions: {
            header: null
        },
    },
    Authorized: {
        screen: AuthorizedNavigator, navigationOptions: {
            header: null
        }
    },
});
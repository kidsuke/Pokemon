import {
    createBottomTabNavigator,
    createStackNavigator, TabBarBottom, TabNavigator,
} from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import SettingsScreen from '../containers/SettingsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react"

const RootNavigator =  createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconName = `ios-home${ focused ? '' : '-outline' }`;
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                title: 'Settings',
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconName = `ios-options${ focused ? '' : '-outline' }`;
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: true,
    }
)

export default RootNavigator
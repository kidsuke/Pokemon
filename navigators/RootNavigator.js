import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import SettingsScreen from '../containers/SettingsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react"
import DetailsScreen from "../containers/DetailsScreen"

const TabNavigator =  createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                tabBarLabel: 'Home',
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
                tabBarLabel: 'Settings',
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

const RootNavigator =  createStackNavigator(
    {
        Main: {
            screen: TabNavigator,
            navigationOptions: {
                title: 'Home'
            }
        },
        Details: {
            screen: DetailsScreen,
        }
    }, {
        initialRouteName: 'Main'
    }
)

export default RootNavigator
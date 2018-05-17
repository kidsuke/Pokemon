import React from "react"
import {Button, View} from "react-native"

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings'
    };

    render() {
        return (
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Button title="Log out"/>
            </View>
        );
    }
}

export default SettingsScreen
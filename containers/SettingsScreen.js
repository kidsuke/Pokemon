import React from "react"
import {Button, View} from "react-native"

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings'
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default SettingsScreen
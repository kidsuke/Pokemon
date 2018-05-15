import React from 'react'
import PropTypes from 'prop-types'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native'

class GenerationListItem extends React.Component {

    render() {
        const { name } = this.props
        return (
            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.metaHeader}>
                    <Text style={styles.metaText}>{name}</Text>
                    <Text style={styles.metaText}>Test</Text>
                </View>
                <Text>Test</Text>
            </TouchableOpacity>
        )
    }

}

GenerationListItem.propTypes = {
    name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        // borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        marginBottom: 20,
        padding: 15
    },
    metaHeader: {
        flexDirection: 'row', // 'column'
        // 'flex-start', 'flex-end', 'center', 'space-around':
        justifyContent: 'space-between',
        marginBottom: 10
    },
    metaText: {
        fontSize: 12
    }
})

export default GenerationListItem
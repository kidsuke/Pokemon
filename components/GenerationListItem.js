import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import { capitalize } from '../common/utils/StringUtils'

const GenerationListItem = (props) => {
    const { name } = props.data
    return (
        <TouchableOpacity>
            <Card>
                <CardTitle title={capitalize(name)}/>
            </Card>
        </TouchableOpacity>
    )
}

GenerationListItem.propTypes = {
    data: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        // borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
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
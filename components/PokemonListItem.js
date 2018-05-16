import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import { capitalize } from '../common/utils/StringUtils'

const PokemonListItem = (props) => {
    const { name, sprites } = props.data
    return (
        <TouchableOpacity>
            <Card>
                <CardImage
                    style={{height: 120, justifyContent: 'center', alignItems: 'center'}}
                    source={{uri: sprites.front_default}}
                    resizeMode={'contain'}
                    resizeMethod={'scale'}/>
                <CardTitle
                    style={{justifyContent: 'center', alignItems: 'center'}}
                    title={capitalize(name)}/>
            </Card>
        </TouchableOpacity>
    )
}

PokemonListItem.propTypes = {
    data: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 2
    },
    title: {
        flex: 1
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

export default PokemonListItem
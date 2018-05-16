import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import { capitalize } from '../common/utils/StringUtils'

const PokemonListItem = (props) => {
    const { data, handleNavigation } = props
    const { name, sprites } = data
    const onPress = () => {
        handleNavigation('Details', data)
    }

    return (
        <TouchableOpacity onPress={onPress}>
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
    data: PropTypes.object.isRequired,
    handleNavigation: PropTypes.func.isRequired
}

export default PokemonListItem
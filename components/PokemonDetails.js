import React from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import { capitalize } from '../common/utils/StringUtils'
import PropTypes from 'prop-types';

const PokemonDetails = (props) => {
    const { data } = props
    const { name, weight, height, sprites } = data

    return (
        <View style={styles.container}>
            {renderSprites(sprites)}
            <Text style={styles.details}>Name: {capitalize(name)}</Text>
            <Text style={styles.details}>Weight: {weight}</Text>
            <Text style={styles.details}>Height: {height}</Text>
        </View>
    )
}

const renderSprites = (sprites) => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                   source={{uri: sprites.front_default}}/>
            <Image style={styles.image}
                   source={{uri: sprites.back_default}}/>
            <Image style={styles.image}
                   source={{uri: sprites.front_shiny}}/>
            <Image style={styles.image}
                   source={{uri: sprites.back_shiny}}/>
        </View>
    )
}

PokemonDetails.propTypes = {
    data: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#528ae5'
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#c4ac5e'
    },
    image: {
        flexBasis: '50%',
        width: 100,
        height: 100,
        backgroundColor: '#6bc45e'
    },
    details: {
        margin: 5
    }
})

export default PokemonDetails
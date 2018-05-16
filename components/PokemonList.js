import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import PokemonListItem from "./PokemonListItem";

const PokemonList = (props) => {
    const { pokemons } = props
    return (
        <FlatList
            style={ styles.container }
            horizontal={ true }
            data={ pokemons }
            renderItem={({ pokemon }) => (
                <PokemonListItem pokemon={ pokemon }/>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default PokemonList
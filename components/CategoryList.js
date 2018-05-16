import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, SectionList, StyleSheet, Text } from 'react-native';

import GenerationListItem from './GenerationListItem'
import PokemonListItem from "./PokemonListItem";


const CategoryList = (props) => {
    const { generations, pokemons } = props
    return (
        <SectionList
            style={ styles.container }
            renderItem={ ({ item, index, section }) => listItem(item, section) }
            renderSectionHeader={ ({ section: { title } }) => (
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            )}
            sections={[
                { title: 'Generations', data: generations },
                { title: 'Pokemons', data: pokemons }
            ]}
        />
    )
}

const listItem = (item, section) => {
    if (section.title === 'Generations') {
        return (
            <GenerationListItem generation={ item }/>
        )
    } else if (section.title === 'Pokemons') {
        return (
            <PokemonListItem pokemon={ item }/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

CategoryList.propTypes = {
    generations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default CategoryList
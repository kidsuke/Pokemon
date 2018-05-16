import React from 'react';
import PropTypes from 'prop-types';
import {SectionList, StyleSheet, Text, View} from 'react-native'

import GenerationListItem from './GenerationListItem'
import PokemonListItem from "./PokemonListItem";
import CategoryListItem from "./CategoryListItem"


const CategoryList = (props) => {
    const { generations, pokemons } = props
    return (
        <SectionList
            style={ styles.container }
            renderItem={ ({item, index, section}) => CategoryListItem({items: item, itemComponent: section.itemComponent}) }
            renderSectionHeader={ ({section: {title}}) => <Text style={ styles.header }>{title}</Text> }
            SectionSeparatorComponent={() => <View style={ styles.sectionSeparator }/>}
            sections={[
                {title: 'Generations', itemComponent: GenerationListItem, data: [generations]},
                {title: 'Pokemons', itemComponent: PokemonListItem, data: [pokemons]}
            ]}
            keyExtractor={ (item, index) => item + index }
        />
    )
}

CategoryList.propTypes = {
    generations: PropTypes.array.isRequired,
    pokemons: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    sectionSeparator: {
        height: 10
    }
})

export default CategoryList
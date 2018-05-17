import React from 'react';
import PropTypes from 'prop-types';
import {SectionList, StyleSheet, Text, View} from 'react-native'

import GenerationListItem from './GenerationListItem'
import PokemonListItem from "./PokemonListItem";
import CategoryChildList from "./CategoryChildList"

const CategoryList = (props) => {
    const { generations, pokemons, handleNavigation, handleRefresh, isLoading } = props
    return (
        <SectionList
            style={ styles.container }
            renderItem={ ({item, index, section}) => CategoryChildList({items: item, itemComponent: section.itemComponent, handleNavigation: handleNavigation}) }
            renderSectionHeader={ ({section: {title}}) => <Text style={ styles.header }>{title}</Text> }
            SectionSeparatorComponent={() => <View style={ styles.sectionSeparator }/>}
            sections={[
                {title: 'Generations', itemComponent: GenerationListItem, data: [generations]},
                {title: 'Pokemons', itemComponent: PokemonListItem, data: [pokemons]}
            ]}
            keyExtractor={ (item, index) => item + index }
            refreshing={isLoading}
            onRefresh={handleRefresh}
        />
    )
}

CategoryList.propTypes = {
    generations: PropTypes.array.isRequired,
    pokemons: PropTypes.array.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    container: {
        margin: 10
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
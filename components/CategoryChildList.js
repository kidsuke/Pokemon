import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View} from 'react-native'

const CategoryListItem = (props) => {
    const { items, itemComponent, handleNavigation } = props
    return (
        <FlatList
            style={ styles.container }
            horizontal={ true }
            ItemSeparatorComponent={() => <View style={ styles.itemSeparator }/>}
            data={ items }
            renderItem={ ({item}) => itemComponent({data: item, handleNavigation: handleNavigation}) }
            keyExtractor={ (item, index) => item + index }
        />
    )
}

CategoryListItem.propTypes = {
    items: PropTypes.array.isRequired,
    itemComponent: PropTypes.func.isRequired,
    handleNavigation: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
    },
    itemSeparator: {
        width: 5
    }
})

export default CategoryListItem
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import GenerationListItem from './GenerationListItem'

const GenerationList = (props) => {
    const { generations } = props
    return (
        <FlatList
            style={styles.container}
            data={generations}
            renderItem={({ item }) => (
                <GenerationListItem
                    name={item.name}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

GenerationList.defaultProps = {
    generations: [{ title: 'yay' }]
}

GenerationList.propTypes = {
    generations: PropTypes.arrayOf(PropTypes.shape({})),
}

export default GenerationList
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import GenerationListItem from './GenerationListItem'

const GenerationList = (props) => {
    const { generations } = props
    return (
        <FlatList
            style={ styles.container }
            horizontal={ true }
            data={ generations }
            renderItem={({ generation }) => (
                <GenerationListItem generation={ generation }/>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

GenerationList.propTypes = {
    generations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default GenerationList
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.numbers}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numbers: {
        color: colors.secondary,
        fontSize: 22,
    },
});

export default NumberContainer;
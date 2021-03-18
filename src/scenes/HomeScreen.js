import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const { home, quoteStyle, authorStyle } = styles;

    return (
        <View style={home}>
            <Text style={quoteStyle}>Bu bir Denemedir</Text>
            <Text style={authorStyle}>Görkem</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quoteStyle: {
        color: 'red',
        fontSize: 36,
        fontWeight: "bold"
    },
    authorStyle: {
        color: 'red',
        fontSize: 18,
        fontWeight: "300"
    }

})

export default HomeScreen;
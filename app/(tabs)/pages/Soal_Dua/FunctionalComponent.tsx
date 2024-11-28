import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FunctionalComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
    fontSize: 32,
    fontWeight: 'bold',
    },
});

export default FunctionalComponent;
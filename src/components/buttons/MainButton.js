import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function MainButton({ text, method }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => method()}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#00adb5",
        borderRadius: 10,
        padding: 20,
        marginVertical: 10
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default MainButton

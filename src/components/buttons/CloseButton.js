import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CloseButton({ text, method }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => method()}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff8474",
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

export default CloseButton

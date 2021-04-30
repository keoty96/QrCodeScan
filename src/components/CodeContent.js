import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainButton from './buttons/MainButton';
import CloseButton from './buttons/CloseButton';

function CodeContent({ type, data, closeModal, navigation }) {

    const save = () => {
        closeModal();
        navigation.navigate('Form', {
            codeData: data,
            codeType: type,
        });
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <View style={{ width: "30%" }}>
                        <Text style={styles.title}>Tipo</Text>
                        <Text style={styles.title}>Data</Text>
                    </View>

                    <View style={{ width: "70%" }}>
                        <Text style={styles.text}>{type}</Text>
                        <Text style={styles.text}>{data}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.contentContainer}>
                <MainButton
                    text="Guardar"
                    method={() => save()}
                />
                <CloseButton
                    text="Cerrar"
                    method={() => closeModal()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        justifyContent: "space-evenly",
        flex: 1,
        marginTop: "100%"
    },
    contentContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingVertical: 10
    },
    title: {
        fontWeight: "bold",
        alignSelf: "center",
        paddingVertical: 5
    },
    text: {
        padding: 5
    },
    button: {
        backgroundColor: "#00adb5",
        borderRadius: 10,
        padding: 20
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default CodeContent

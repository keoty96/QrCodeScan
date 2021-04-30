import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainButton from './components/buttons/MainButton';

function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={{ width: "80%" }}>
                <MainButton
                    method={() => navigation.navigate('Escanear')}
                    text="ESCANEAR DNI" />

                <MainButton
                    method={() => navigation.navigate('List')}
                    text="VER LISTA" />
            </View>

            <StatusBar style="auto" />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home

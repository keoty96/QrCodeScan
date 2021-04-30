import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import MainButton from './components/buttons/MainButton';
import { useList } from './components/context/Hooks';

function Form({ route, navigation }) {

    const data = route.params.codeData;
    const result = data.split('|');
    const [, addData] = useList();

    const saveToList = () => {
        addData(result);
        navigation.navigate("List");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {result.map((item, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        editable={false}
                        value={item}
                    />
                ))}

                <MainButton
                    text="Guardar"
                    method={() => saveToList()}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: "100%",
        padding: 25,
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 8,
        paddingHorizontal: 10
    },
});

export default Form

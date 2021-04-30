import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useList } from './components/context/Hooks';

function List() {

    const [state,] = useList();

    const renderItem = ({ item }) => (
        <View style={styles.list}>
            {item.map((item, index) => (
                <Text key={index}>
                    {item}
                </Text>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={state.data}
                renderItem={renderItem}
                keyExtractor={item => item.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    list: {
        padding: 10,
        borderBottomColor: "#888888",
        borderBottomWidth: 1
    }
})

export default List

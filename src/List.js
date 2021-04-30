import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useList } from './components/context/Hooks';
import MainButton from './components/buttons/MainButton';

function List({ navigation }) {

    const [state,] = useList();

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            {item.map((item, index) => (
                <Text key={index}>
                    {item}
                </Text>
            ))}
        </View>
    );

    return (
        <View style={{ marginHorizontal: 20 }}>
            <FlatList
                data={state.data}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default List

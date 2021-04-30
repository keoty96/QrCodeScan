import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CodeContent from './components/CodeContent';
import MainButton from './components/buttons/MainButton';

function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [code, setCode] = useState({
        type: "",
        data: ""
    });
    const [modal, setModal] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setModal(true);
        setCode({ type: type, data: data });
    };

    if (hasPermission === null) {
        return <Text>Permiso para Camara</Text>;
    }
    if (hasPermission === false) {
        return <Text>Acceso a Camara Denegado</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            <View style={{ width: "80%", marginTop: "100%" }}>
                {scanned &&
                    <MainButton
                        text="Escanear Nuevamente"
                        method={() => setScanned(false)}
                    />
                }
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <CodeContent
                    navigation={navigation}
                    type={code.type}
                    data={code.data}
                    closeModal={() => setModal(false)}
                />
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Scanner

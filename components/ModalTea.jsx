import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, Image, FlatList } from 'react-native';

const milkOptions = [
    { id: 1, name: 'Black' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Herbal' },
    { id: 4, name: 'Chamomile'},
    { id: 5, name: 'Mint'},
    // Add more milk options as needed
];

const ModalTea = ({ onSelect }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMilk, setSelectedMilk] = useState(milkOptions[0])
    const handleSelectMilk = (milk) => {
        setSelectedMilk(milk);
        onSelect(milk); // Pass the selected milk back to the parent component
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Select Tea:</Text>
                        <FlatList
                            data={milkOptions}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={[styles.button, styles.milkOptionButton]}
                                    onPress={() => handleSelectMilk(item)}>
                                    <Text style={styles.milkOptionText}>{item.name}</Text>
                                </Pressable>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Image source={require('../assets/right.png')} style={styles.img} />
            </Pressable>
            {selectedMilk && (
                <Text style={styles.selectedMilkText}>{selectedMilk.name}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left:140,
        top:4,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#72401E',
        borderRadius: 20,
        height:320,
        padding: 35,
        alignItems: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
    },
    milkOptionButton: {
        backgroundColor: '#fff',
    },
    milkOptionText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    selectedMilkText: {
        marginTop: 10,
        fontSize: 16,
        right:55,
        bottom:33
    },
});

export default ModalTea;
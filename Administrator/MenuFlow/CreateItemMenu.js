import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomModalSheet from './CustomModalSheet';
import AddNewSortiments from './AddNewSortiments';

const CreateItemMenu = () => {
    const [modalDrink, setModalDrink] = useState(false);
    const [modalSortiment, setModalSortiment] = useState(false);
    const openModalDrink = () => {
        setModalDrink(true);
    };

    const closeModalDrink = () => {
        setModalDrink(false);
    };
    const openModalSort = () => {
        setModalSortiment(true);
    };

    const closeModelSort = () => {
        setModalSortiment(false);
    };

    return (
        <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.text}>Sortiments</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={openModalSort}>
            <Text style={styles.buttonText}>Add new sortiments</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.item}>
        <Text style={styles.text}>Drinks</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={openModalDrink}>
            <Text style={styles.buttonText}>Add new drinks</Text>
            </TouchableOpacity>
        </View>
        <CustomModalSheet isVisible={modalDrink} onClose={closeModalDrink} /> 
        <AddNewSortiments isVisible={modalSortiment} onClose={closeModelSort} /> 
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
  },
  item: {
    marginBottom: 20,
  },    
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#471200',
  },
  buttonContainer: {
    backgroundColor: '#C06A30',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});



export default CreateItemMenu;

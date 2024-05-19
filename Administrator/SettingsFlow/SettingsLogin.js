import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AddNewSortiments from '../MenuFlow/AddNewSortiments';
import CustomModalSheet from '../MenuFlow/CustomModalSheet';

const SettingsLogin = ({navigation }) => {
    const handleAddButtonPress = () => {
       navigation.navigate('AdministratorFlow');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={styles.editButton} onPress={handleAddButtonPress}>
             <Text>Save</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Circular Button */}
          <TouchableOpacity style={styles.circleButton}>
            <Text style={styles.circleButtonText}>Edit Photo</Text>
          </TouchableOpacity>

        {/* Large Text */}
        <Text style={styles.largeText}>Comic Café</Text>

        {/* Medium Text */}
        <Text style={styles.mediumText}>Details</Text>

        <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter your address" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} placeholder="Enter your phone number" />
      </View>

        {/* Text */}
        <Text style={styles.additionalText}>Additional Information</Text>

        {/* 3 Circular Buttons with Different Colors */}
        <View style={styles.circleButtonsContainer}>
          <TouchableOpacity style={[styles.smallCircleButton, styles.redButton]} />
          <TouchableOpacity style={[styles.smallCircleButton, styles.greenButton]} />
          <TouchableOpacity style={[styles.smallCircleButton, styles.blueButton]} />
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add new color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openModalSort}>
          <Text style={styles.buttonText}>Add new Sortiment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openModalDrink}>
          <Text style={styles.buttonText}>Add new Drink</Text>
        </TouchableOpacity>
        <CustomModalSheet isVisible={modalDrink} onClose={closeModalDrink} /> 
        <AddNewSortiments isVisible={modalSortiment} onClose={closeModelSort} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  circleButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C06A30',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  largeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    padding: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  additionalText: {
    fontSize: 18,
    marginVertical: 20,
  },
  circleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  smallCircleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  redButton: {
    backgroundColor: '#471200',
  },
  greenButton: {
    backgroundColor: '#593116',
  },
  blueButton: {
    backgroundColor: '#C06A30',
  },
  button: {
    backgroundColor: '#C06A30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  editButton: {
    marginRight: 10,
    padding: 10,
  },
});

export default SettingsLogin;

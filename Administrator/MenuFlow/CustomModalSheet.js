import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, TextInput, FlatList } from 'react-native';
import AddNewDrinks from './AddNewDrinks';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import * as ImagePicker from 'expo-image-picker';

const CustomModalSheet = ({ isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [takeaway, setTakeaway] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSave = async () => {
    try {
      // Referência para a coleção 'foods' no Firestore
      const foodsCollection = collection(db, 'foods');

      // Objeto representando a nova comida
      const newFood = {
        name,
        price: parseFloat(price), // Convertendo para número
        image: selectedImage || '../assets/flat-white.png',
        takeaway
      };

      // Adiciona um novo documento à coleção 'foods' com os dados da nova comida
      await addDoc(foodsCollection, newFood);

      console.log('New food document added successfully!');
      
      // Limpar os campos após salvar
      setName('');
      setPrice('');
      setSelectedImage(null);
      setTakeaway(false);
      onClose();
    } catch (error) {
      console.error('Error adding food document:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={onClose}>
              <Text style={styles.headerButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={handleSave}>
              <Text style={styles.headerButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.choosePhotoButton} onPress={pickImage}>
                <Text style={styles.choosePhotoButtonText}>Choose Photo</Text>
              </TouchableOpacity>
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.photo} />
              ) : (
                <Image source={require('../assets/americano2.png')} style={styles.photo} />
              )}
            </View>
            <View style={styles.bottomContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Name..."
                placeholderTextColor="#C0C0C0"
                value={name} 
                onChangeText={setName}
              />
              <TextInput 
                style={styles.textInput}
                placeholder="Price..."
                placeholderTextColor="#C0C0C0"
                value={price}
                onChangeText={setPrice} 
              />
              <Text>Takeaway:</Text>
              <TextInput 
                style={styles.textInput}
                placeholder="Takeaway..."
                placeholderTextColor="#C0C0C0"
                value={takeaway.toString()} 
                onChangeText={(value) => setTakeaway(value === 'true')} 
              />
              <AddNewDrinks label="Milk" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: '#E5DBD7',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  modalContent: {
    marginTop: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePhotoButton: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#C06A30',
    padding: 10,
    borderRadius: 12,
  },
  choosePhotoButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  photo: {
    width: 300,
    height: 200,
    borderRadius: 25,
  },
  optionButton: {
    backgroundColor: '#C06A30',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  bottomContainer: {
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#C06A30',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomModalSheet;

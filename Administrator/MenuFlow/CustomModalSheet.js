import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, TextInput, FlatList} from 'react-native';
import AddNewDrinks from './AddNewDrinks';

const CustomModalSheet = ({ isVisible, onClose }) => {
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
                <TouchableOpacity style={styles.headerButton} onPress={() => alert('Save')}>
                <Text style={styles.headerButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
                <View style={styles.imageContainer}>
                    {/* Botão "Choose Photo" */}
                    <TouchableOpacity style={styles.choosePhotoButton} onPress={() => alert('Choose photo pressed')}>
                    <Text style={styles.choosePhotoButtonText}>Choose Photo</Text>
                    </TouchableOpacity>

                    {/* Foto com bordas inferiores arredondadas */}
                    <Image
                    source={require('../assets/americano2.png')}
                    style={styles.photo}
                    />
                </View>
                <View style={styles.bottomContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Write something..."
            placeholderTextColor="#C0C0C0"
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
    //   chooseMilkButton: {
    //     backgroundColor: '#C06A30',
    //     padding: 10,
    //     borderRadius: 5,
    //     marginBottom: 10,
    //   },
    //   chooseMilkButtonText: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    //   selectedItemsContainer: {
    //     marginTop: 20,
    //   },
    //   selectedItemsText: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //   },
    //   selectedItemText: {
    //     fontSize: 16,
    //   },
    //   modalContainerMilk: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#E5DBD7',
    //   },
    //   modalContentMilk: {
    //     width: '90%',
    //     height: '50%',
    //     backgroundColor: '#fff',
    //     borderRadius: 10,
    //     padding: 20,
    //   },
    //   modalHeaderMilk: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 20,
    //   },
    //   modalButtonTextMilk: {
    //     fontSize: 18,
    //     color: '#C06A30',
    //   },
    //   itemContainerMilk: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 15,
    //     backgroundColor: '#E5DBD7',
    //     borderRadius: 10,
    //     marginBottom: 10,
    //   },
    //   itemTextMilk: {
    //     fontSize: 18,
    //   },
    //   checkmark: {
    //     fontSize: 18,
    //     color: 'green',
    //   },
  });
export default CustomModalSheet
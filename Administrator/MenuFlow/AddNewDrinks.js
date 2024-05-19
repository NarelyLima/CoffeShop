import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet,TouchableOpacity, Modal, FlatList } from 'react-native';

const items = ['Leite Magro', 'Leite Meio Magro', 'Leite Gordo', 'Leite de Soja', 'Leite de Amêndoas'];

const AddNewDrinks = ({ label }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleModal = () => {
      setModalVisible(!isModalVisible); 
  };
  
  const toggleItem = (item) => {
      setSelectedItems((prev) => {
        if (prev.includes(item)) {
          return prev.filter((i) => i !== item);
        } else {
          return [...prev, item];
        }
      });
    };
  
    const saveSelection = () => {
      setModalVisible(false);
    };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          trackColor={{ false: '#787880', true: '#4CAF50' }} 
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          ios_backgroundColor="#787880"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </View>
      {isEnabled && (
        <View style={styles.additionalElement}>
         <TouchableOpacity style={styles.chooseMilkButton} onPress={toggleModal}>
            <Text style={styles.chooseMilkButtonText}>Choose Type of Milk</Text>
            </TouchableOpacity>
            {selectedItems.length > 0 && (
                <View>
                <Text style={styles.selectedItemsText}>Available Milk:</Text>
                {selectedItems.map((item, index) => (
                    <Text key={index} style={styles.selectedItemText}>{item}</Text>
                ))}
                </View>
            )}
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainerMilk}>
                <View style={styles.modalContentMilk}>
                    <View style={styles.modalHeaderMilk}>
                    <TouchableOpacity onPress={saveSelection}>
                        <Text style={styles.modalButtonTextMilk}>Save</Text>
                    </TouchableOpacity>
                    </View>
                    <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        style={styles.itemContainerMilk}
                        onPress={() => toggleItem(item)}
                        >
                        <Text style={styles.itemTextMilk}>{item}</Text>
                        {selectedItems.includes(item) && <Text style={styles.checkmark}>✔</Text>}
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    />
                </View>
                </View>
            </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 300,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  additionalElement: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 350,
    
  },
  chooseMilkButton: {
    backgroundColor: '#593116',
    borderRadius: 12,
    marginTop: 20,
    width: 300,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseMilkButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  
  },
  selectedItemsContainer: {
    marginTop: 20,
  },
  selectedItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedItemText: {
    fontSize: 16,
  },
  modalContainerMilk: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
  },
  modalContentMilk: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalHeaderMilk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalButtonTextMilk: {
    fontSize: 18,
    color: '#C06A30',
  },
  itemContainerMilk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#E5DBD7',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTextMilk: {
    fontSize: 18,
  },
  checkmark: {
    fontSize: 18,
    color: 'green',
  },
});

export default AddNewDrinks;

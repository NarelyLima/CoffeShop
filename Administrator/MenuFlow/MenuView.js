import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuView = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState('');
    const handleAddButtonPress = (inputData) => {
    navigation.navigate('CreateItemMenu', {data: inputData});
     };

  // Configuração da Navigation Bar
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddButtonPress('CreateItemMenu')}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color="black" />
            <TextInput
                style={styles.searchInput}
                placeholder="Search Here"
                value={searchText}
                onChangeText={setSearchText}
            />
        </View>
        {/* Main Content */}
        <Text>Main Content Goes Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DBD7',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  searchText: {
    marginLeft: 10,
    color: 'gray',
  },
  addButton: {
    marginRight: 10,
    padding: 10,
  },
});

export default MenuView;

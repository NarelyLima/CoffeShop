import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';
import { menuItems, drinks, pastry } from './data'; // Importing data from data.js

const Menu = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.maro}>
        <Image source={item.image} style={styles.imagine} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput onChangeText={setText} value={text} placeholder="Search" style={styles.search} />
      <TouchableOpacity style={styles.but} >
        <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
          <Image source={require('../assets/4735061.png')} style={styles.empl} />
          <Text style={styles.but_txt}>Call Employer</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.coffees}>Coffee</Text>
      <FlatList data={menuItems} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} showsHorizontalScrollIndicator={false}/>
      <Text style={styles.drinks}>Drinks</Text>
      <FlatList data={drinks} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.drinksList} showsHorizontalScrollIndicator={false}/>
      <Text style={styles.pastry}>Pastry</Text>
      <FlatList data={pastry} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.pastryList} showsHorizontalScrollIndicator={false}/>
      <Sidebar style={styles.sidebar}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#DCC3B9'
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    top: 50,
    left: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drinksList: {
    bottom:40 // Adjust this value as needed
  },
  pastryList : {
    bottom: 80
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 4
  },
  price: {
    fontSize: 16,
    top: 7
  },
  search: {
    backgroundColor: '#BE9C85',
    color: '#000',
    height: 36,
    zIndex: 999,
    top: 60,
    right: 30,
    width: 270,
    borderRadius: 10,
    padding: 10
  },
  but: {
    position: 'absolute',
    borderRadius: 20,
    position: 'relative',
    width: 60,
    height: 60,
    top: 10,
    left: 145,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butGradient: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  but_txt: {
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  empl: {
    height: 40,
    width: 40,
    bottom: 4
  },
  coffees: {
    position:'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#593116',
    left: 20,
    top: 120
  },
  maro: {
    backgroundColor: '#593116',
    height: 90,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagine: {
    height: 80,
    width: 80,
  },
  drinks: {
    position:'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#593116',
    left: 20,
    top:320
  },
  pastry: {
    position:'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#593116',
    left: 20,
    bottom:265
  },
  sidebar:{
    position:'absolute'
  }
});

export default Menu;

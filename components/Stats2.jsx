import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Sidebar from './Sidebar';

const Stats2 = () => {
  const [order, setOrder] = useState([
    { id: '1', name: 'Caffe Latte', price: '$3.50', image: require('../assets/caffe-latte.png'), time: '5 minutes', delivered: false },
    { id: '2', name: 'Natural Juice', price: '$3.50', image: require('../assets/juice.png'), time: '8 minutes', delivered: false },
    { id: '3', name: 'Queque', price: '$4.00', image: require('../assets/queque.png'), time: '2 minutes', delivered: false },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.time}>Estimated Time: {item.time}</Text>
        {item.delivered && <Text style={styles.delivered}>Delivered</Text>}
      </View>
    </TouchableOpacity>
  );

  const handlePress = (item) => {
    const updatedOrder = order.map(orderItem => {
      if (orderItem.id === item.id) {
        return { ...orderItem, time: 'Delivered', delivered: true };
      }
      return orderItem;
    });
    setOrder(updatedOrder);
  };

  // Check if all items are delivered
  const allDelivered = order.every(item => item.delivered);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.statusContainer}>
        <View style={[styles.status, { backgroundColor: allDelivered ? '#19B60B' : '#EEE73F' }]} />
        <Text style={styles.statusText}>{allDelivered ? 'DELIVERED' : 'PENDING'}</Text>
      </View>
      <Text style={styles.text}>Statistics</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={order}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Sidebar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC3B9',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    color: '#593116',
    marginTop: 45,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 130,
    left: 30,
  },
  status: {
    height: 24,
    width: 24,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#593116',
  },
  listContainer: {
    flex: 1,
    marginTop: 70, // Adjust this value as needed
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 330,
  },
  imageContainer: {
    backgroundColor: '#593116',
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  delivered: {
    fontSize: 14,
    color: '#19B60B',
  },
});

export default Stats2;

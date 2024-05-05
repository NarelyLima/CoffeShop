import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonWithCircle = ({ text, number }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonWithCircle text="Waiting time: hh:mm" number={4} />
      <ButtonWithCircle text="Waiting time: hh:mm" number={2} />
      <ButtonWithCircle text="Waiting time: hh:mm" number={6} />
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    width: 300, 
    height: 90,
    
  },
  buttonText: {
    color: '#593116',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#593116',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#E5DBD7',
    fontSize: 20,
  },
});

export default OrderScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuView from '../../Administrator/AdministratorFlow';

const PerfilScreen = ({navigation}) => {
  const customerFlow = (inputData) => {
    navigation.navigate('ChoosePerfil', { data: inputData });
  };
  const employeeFlow = (inputData) => {
    navigation.navigate('ChoosePerfil', { data: inputData });
  };
  const administratorFlow = (inputData) => {
    navigation.navigate('ChoosePerfil', { data: inputData });
  };

  return (
     <View style={styles.container}>
     <Text style={styles.headerText}>You are:</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => customerFlow('Customer')}>
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => employeeFlow('Employee')}>
          <Text style={styles.buttonText}>Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => administratorFlow('Administrator')}>
          <Text style={styles.buttonText}>Administrator</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCC3B9',
    width: '100%', 
    height: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#72401E',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 12,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonMargin: {
    marginTop: 20,
  },
});

export default PerfilScreen;

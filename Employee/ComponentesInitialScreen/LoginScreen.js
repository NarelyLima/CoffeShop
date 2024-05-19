import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../../components/Menu';
import RegisterScreen from './RegisterScreen';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation, route }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const { data } = route.params;
  const loginButton = (dataPreview) => {
    if (dataPreview === 'Customer') {
      navigation.navigate('Menu');  
    } else if (dataPreview === 'Employee') {
      navigation.navigate('EmployeeFlow'); 
    } else if (dataPreview === 'Administrator') {
      navigation.navigate('MenuView'); 
    } 
  };
  const registerButton = (dataPreview) => {
    navigation.navigate('RegisterScreen', {data: dataPreview});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Text style={styles.descriptionText}>Login to continue using the app</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={text1}
          onChangeText={(text) => setText1(text)}
          placeholder="Enter your username"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={text2}
          onChangeText={(text) => setText2(text)}
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => loginButton(data)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlinedButtonContainer} onPress={() => registerButton(data)}>
        <Text style={styles.label}>Don't have an account? Sign up
</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCC3B9',
    paddingHorizontal: 20,
    width: '100%', 
    height: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#72401E',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#72401E',
    alignSelf: 'flex-start',
  },
  inputGroup: {
    marginBottom: 10,
    width: '100%',
    alignSelf: 'stretch'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#72401E',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 350,
  },
  buttonContainer: {
    backgroundColor: '#72401E',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 12,
  },
  outlinedButtonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;

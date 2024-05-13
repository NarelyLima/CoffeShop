import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleButtonPress = () => {
    alert(`Texto 1: ${text1}\nTexto 2: ${text2}`);
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
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlinedButtonContainer} onPress={handleButtonPress}>
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
    width: 300,
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

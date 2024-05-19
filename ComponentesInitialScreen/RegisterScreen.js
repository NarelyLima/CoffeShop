import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';

const RegisterScreen = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleButtonPress = () => {
    // Lógica para o que acontece quando o botão é pressionado
    alert(`Texto 1: ${text1}\nTexto 2: ${text2}\nTexto 3: ${text3}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Photo</Text>
      <TouchableOpacity style={styles.roundButton}>
        <Image source={require('../assets/CafePicker.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            style={styles.input}
            value={text3}
            onChangeText={(text) => setText3(text)}
            placeholder="Enter your password"
          />
        </View>
      </View>
      <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => handleButtonPress('Botão 3')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
    paddingHorizontal: 20,
    width: '100%', 
    height: '100%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  roundButton: {
    backgroundColor: '#72401E',
    borderRadius: 75, // Metade da largura e altura para torná-lo redondo
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonImage: {
    width: 60,
    height: 60, 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
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

export default RegisterScreen;

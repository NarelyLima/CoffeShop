import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PerfilScreen = () => {
  const handleButtonPress = (buttonText) => {
    // Lógica para o que acontece quando um botão é pressionado
    alert(`Você pressionou o botão "${buttonText}"`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>You are:</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botão 1')}>
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => handleButtonPress('Botão 2')}>
          <Text style={styles.buttonText}>Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => handleButtonPress('Botão 3')}>
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
    backgroundColor: '#E5DBD7',
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

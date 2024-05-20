import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ChoosePerfil = () => {
  const handleButtonPress = (buttonText) => {
    // Lógica para o que acontece quando um botão é pressionado
    alert(`Você pressionou o botão "${buttonText}"`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/CafeLogin.png')}
      />
      
      <View>
        <Text style={styles.headerText}>You are new to our cafe?</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botão 1')}>
          <Text style={styles.buttonText}>Sign up now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botão 2')}>
          <Text style={styles.buttonText}>I already own an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteButton]} onPress={() => handleButtonPress('Botão 3')}>
          <Text style={[styles.buttonText, styles.whiteButtonText]}>Order without an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
    width: '100%', 
    height: '100%',
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 100,
    marginTop: 0, 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#72401E',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteButton: {
    backgroundColor: '#E5DBD7',
    borderWidth: 5,
    borderColor: '#72401E',
  },
  whiteButtonText: {
    color: '#72401E',
  },
});

export default ChoosePerfil;

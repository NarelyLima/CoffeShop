import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';

const InitialScreen = () => {
  const handleGetStarted = () => {
    // Lógica para o que acontece quando o botão é clicado
    alert('Vamos começar!');
  };

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/CafeInitialScreen.png')} // Caminho para a imagem no diretório 'assets'
        style={[styles.backgroundImage, { width: screenWidth }]}
      >
       
        <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    marginBottom: 40,

  },
  getStartedButton: { 
    backgroundColor: '#6A3A1A',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 60,
    fontWeight: '600',
    marginBottom: 100,
  }
});

export default InitialScreen;
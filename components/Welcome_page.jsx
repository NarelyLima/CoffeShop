import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Menu from './Menu';

const Welcome_page = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You must first read the QR-Code that identifies the table you are at.</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.QR} onPress={() => navigation.navigate('Menu')}>
        <Image source={require('../assets/camera.viewfinder.png')}
        style={styles.QR_img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#DCC3B9'
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      lineHeight: 30,
      fontWeight: 'bold',
      color: '#72401E', 
    },
    QR: {
      position: 'absolute',
      bottom: 0,
      padding: 30,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
    QR_img: {
        width: 40,
        height:40,
    }
  });
  

export default Welcome_page;

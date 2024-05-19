import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsView = ({navigation}) => {
    const handleAddButtonPress = () => {
        navigation.navigate('SettingsEdit');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={styles.editButton} onPress={handleAddButtonPress}>
              <Ionicons name="pencil-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/pastel2.png')} // Substitua pelo caminho da sua imagem
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Comic Café</Text>
      <Text style={styles.subtitle}>Details</Text>
      
      <View style={styles.textRow}>
        <Text style={styles.text}>Adress</Text>
        <Text style={styles.text}>Almeda de Santa Apolonia</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.text}>Phone Number</Text>
        <Text style={styles.text}>273 442 254</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.text}>Color Palette</Text>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, styles.circleRed]} />
          <View style={[styles.circle, styles.circleGreen]} />
          <View style={[styles.circle, styles.circleBlue]} />
        </View>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.text}>Sortiment</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Sortiments</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.text}>Drinks</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Drinks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E5DBD7',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
  },
  circleContainer: {
    flexDirection: 'row',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  circleRed: {
    backgroundColor: '#471200',
  },
  circleGreen: {
    backgroundColor: '#593116',
  },
  circleBlue: {
    backgroundColor: '#C06A30',
  },
  button: {
    backgroundColor: '#C06A30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsView;

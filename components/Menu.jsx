import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, getDocs } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebase.config';
import { coffees, drinks, pastry } from './data';
import Sidebar from './Sidebar';

const Menu = () => {
  const navigation = useNavigation();
  const [coffeesData, setCoffeesData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [pastriesData, setPastriesData] = useState([]);
  const [foodsData, setFoodsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coffeeDocs = await getDocs(collection(db, 'coffees'));
        const drinkDocs = await getDocs(collection(db, 'drinks'));
        const pastryDocs = await getDocs(collection(db, 'pastry'));
        
        const foodsCollection = collection(db, 'foods');
        const querySnapshot = await getDocs(foodsCollection);
        const fetchedFoodsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setFoodsData(fetchedFoodsData);
        setCoffeesData(coffeeDocs.docs.map((doc, index) => ({ id: doc.id, ...doc.data(), image: coffees[index].image })));
        setDrinksData(drinkDocs.docs.map((doc, index) => ({ id: doc.id, ...doc.data(), image: drinks[index].image })));
        setPastriesData(pastryDocs.docs.map((doc, index) => ({ id: doc.id, ...doc.data(), image: pastry[index].image })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sendData = () => {
    setDoc(doc(db, 'settings', 'toggleVisibility'), {
      isVisible: true,
    })
    .then(() => {
      console.log('Data successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.maro}>
          <Image source={item.image} style={styles.imagine} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}$</Text>
      </TouchableOpacity>
    );
  };

  const renderItemFood = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.maro}>
          <Image source={{ uri: item.image }} style={styles.imagine} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}$</Text>
      </TouchableOpacity>
    );
  };

  const handleItemPress = (item) => {
    console.log("Item from collection:", item);
    if (item.name === 'Long Espresso') {
      navigation.navigate('LongEspresso');
    }
    if (item.name === 'Americano') {
      navigation.navigate('Americano');
    }
    if (item.name === 'Bolo de Arroz') {
      navigation.navigate('Bolo');
    }
    if (item.name === 'Caffe Latte') {
      navigation.navigate('CafeLatte');
    }
    if (item.name === 'Cappuccino') {
      navigation.navigate('Cappuccino');
    }
    if (item.name === 'Flat White') {
      navigation.navigate('FlatWhite');
    }
    if (item.name === 'Hot Choco') {
      navigation.navigate('HotChoco');
    }
    if (item.name === 'Macchiato') {
      navigation.navigate('Macchiato');
    }
    if (item.name === 'Milkshake') {
      navigation.navigate('Milkshake');
    }
    if (item.name === 'Mocha') {
      navigation.navigate('Mocha');
    }
    if (item.name === 'Natural Juice') {
      navigation.navigate('NaturalJuice');
    }
    if (item.name === 'Pão de Deus') {
      navigation.navigate('Pao');
    }
    if (item.name === 'Pastel de Nata') {
      navigation.navigate('Pastel');
    }
    if (item.name === 'Queque') {
      navigation.navigate('Queque');
    }
    if (item.name === 'Soda') {
      navigation.navigate('Soda');
    }
    if (item.name === 'Tea') {
      navigation.navigate('Tea');
    }
  };

  if (loading) {
    return (
      <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Image source={{ uri: 'https://64.media.tumblr.com/515bfedfa408cfe6e84ad4e35945f0bd/tumblr_mmgb7h5NXD1qg6rkio1_500.gifv' }} style={{ width: '100%',height: '100%',resizeMode: 'contain',zIndex: 999 }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder="Search" style={styles.search} />
      <TouchableOpacity style={styles.but} onPress={sendData}>
        <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
          <Image source={require('../assets/4735061.png')} style={styles.empl} />
          <Text style={styles.but_txt}>Call Employer</Text>
        </LinearGradient>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.containerScroll}>
          <FlatList
            data={foodsData}
            renderItem={renderItemFood}
            keyExtractor={item => item.id}
            horizontal
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
          <FlatList 
            data={coffeesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalList}
            contentContainerStyle={styles.listContent}
          />
          <FlatList 
            data={drinksData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalList}
            contentContainerStyle={styles.listContent}
          />
          <FlatList 
            data={pastriesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalList}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </ScrollView>   
      <Sidebar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#DCC3B9'
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    width: 150,
    height: 200,
    top: 50,
    left: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 4
  },
  price: {
    fontSize: 16,
    top: 7
  },
  search: {
    backgroundColor: '#BE9C85',
    color: '#000',
    height: 36,
    zIndex: 999,
    top: 60,
    right: 30,
    width: 270,
    borderRadius: 10,
    padding: 10
  },
  but: {
    position: 'absolute',
    borderRadius: 20,
    position: 'relative',
    width: 60,
    height: 60,
    top: 10,
    left: 145,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butGradient: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  but_txt: {
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  empl: {
    height: 40,
    width: 40,
    bottom: 4
  },
  maro: {
    backgroundColor: '#593116',
    height: 90,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagine: {
    height: 80,
    width: 80,
  },
  sidebar: {
    position: 'absolute'
  },
  containerScroll: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'baseline',
    paddingVertical: 5,
    bottom: 30,
  },
  list: {
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  horizontalList: {
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
});

export default Menu;

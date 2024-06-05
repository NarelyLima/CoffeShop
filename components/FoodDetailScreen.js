import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Modaltest from './Modaltest';
import { doc, getDoc, updateDoc, addDoc, collection, setDoc } from 'firebase/firestore';   
import { db } from '../firebase.config'; 
import { useNavigation } from '@react-navigation/native';

const FoodDetailScreen = ({ route }) => {
    const [isLiked, setIsLiked] = useState(false); // State to track like status
    const [isEnabled, setIsEnabled] = useState(false); // State for milk switch
    const [text, setText] = useState(''); // State for observation text
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMilk, setSelectedMilk] = useState(null);
    const [foodData, setFoodData] = useState(null); 
    const navigation = useNavigation();
    const { foodId } = route.params; // Get foodId from route params

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const docRef = doc(db, 'foods', foodId); // Fetch the specific food item
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setFoodData(docSnap.data());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchFoodData(); // Call the function to fetch data
    }, [foodId]);

    const toggleLike = () => {
        setIsLiked(!isLiked); // Toggle like status
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1); // Increment quantity
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1); // Decrement quantity if greater than 1
        }
    };

    if (!foodData) {
        return (
            <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    
    const addToOrder = async () => {
        const orderData = {
            name: foodData.name,
            observations: text,
            price: foodData.price,
            quantity: quantity,
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), orderData);
            console.log('Document written with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.bgImg} source={require('../assets/coffee-brain-caffeine-neuroscincces.png')} />
            <TouchableOpacity style={styles.GoBack} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/chevron.backward.circle.fill.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.love} onPress={toggleLike}>
                <Image source={isLiked ? require('../assets/heart.circle.fill.png') : require('../assets/heart.circle.png')} />
            </TouchableOpacity>
            <View style={styles.menu}>
                <Text style={styles.food_txt}>{foodData.name}</Text>
                <Text style={styles.price}>{foodData.price}$</Text>
                <View style={styles.obsBg}>
                    <TextInput onChangeText={setText} value={text} placeholder="Add Observations" style={styles.obs} />
                </View>
                <Image source={require('../assets/takeaway.png')} style={styles.foodImg} />
                <Text style={styles.number}>{quantity}</Text>
                <TouchableOpacity style={styles.btMinus} onPress={decrementQuantity}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btPlus} onPress={incrementQuantity}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.but} onPress={addToOrder}>
                    <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                        <Text style={styles.but_txt}>Add to Order</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImg: {
        resizeMode: 'cover',
        width: 400,
        height: 400,
        bottom: 220,
        right: 10
    },
    menu: {
        position: "absolute",
        width: 375,
        height: 470,
        top: 350,
        backgroundColor: '#DCC3B9',
        borderRadius: 30,
        zIndex: 999,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    GoBack: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 45,
        left: 30
    },
    love: {
        position: 'absolute',
        top: 45,
        right: 30
    },
    food_txt: {
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        left: 30,
        top: 20,
        color: '#593116'
    },
    price: {
        position: 'absolute',
        fontSize: 30,
        right: 40,
        top: 20,
        color: '#593116'
    },
    obsBg: {
        position: 'absolute',
        width: 320,
        height: 46,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        top: 130,
        left: 27,
        zIndex: 999,
        borderRadius: 12,
    },
    obs: {
        fontSize: 18,
        left: 20,
        top: 12,
        color: '#3C3C43'
    },
    foodImg: {
        position: 'absolute',
        height: 140,
        width: 140,
        resizeMode: 'contain',
        bottom: 100
    },
    btMinus: {
        position: 'absolute',
        backgroundColor: '#593116',
        width: 50,
        height: 50,
        borderRadius: 25,
        left: 80,
        bottom: 140,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    minus: {
        position: 'absolute',
        fontSize: 60,
        fontWeight: 'bold',
        color: "#fff",
        top: -10
    },
    btPlus: {
        position: 'absolute',
        backgroundColor: '#593116',
        width: 50,
        height: 50,
        borderRadius: 25,
        right: 80,
        bottom: 140,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus: {
        position: 'absolute',
        fontSize: 50,
        fontWeight: 'bold',
        color: "#fff",
        top: -4
    },
    but: {
        position: 'absolute',
        borderRadius: 20,
        position: 'relative',
        width: 330,
        height: 60,
        top: 140,
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    number: {
        position: 'relative',
        fontSize: 30,
        color: '#fff',
        top: 100,
        fontWeight: 'bold',
    }
});

export default FoodDetailScreen;

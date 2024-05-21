import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { db } from '../firebase.config';
 
const ButtonWithCircle = ({ text, number }) => {
  const navigation = useNavigation();

  const cartOfUser = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={cartOfUser}>
      <Text style={styles.buttonText}>{text}</Text>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const OrderScreen = () => {
  const [isCurrentTime, setIsCurrentTime] = useState(null);
  const [timeDifference, setTimeDifference] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'clicks', 'clicksTime');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const clickTime = docSnap.data().clickTime; // Obter o tempo do clique
          setIsCurrentTime(clickTime);
          const clickTimeDate = parseISO(clickTime); // Converter para objeto Date
          const difference = formatDistanceToNow(clickTimeDate, { addSuffix: true }); // Calcular a diferença de tempo
          setTimeDifference(difference);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {isCurrentTime && (
        <ButtonWithCircle text={`Waiting time: ${timeDifference}`} number={1} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    width: 350, 
    height: 90,
    
  },
  buttonText: {
    color: '#593116',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#593116',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#E5DBD7',
    fontSize: 20,
  },
});

export default OrderScreen;

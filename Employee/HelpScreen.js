import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { db } from '../firebase.config';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

const SquareWithCircle = ({ number, text }) => {
  const [isEnabled, setIsEnabled] = useState(false); // Inicia como visível
  const [isDeleted, setIsDeleted] = useState(false); // Estado para controlar se o dado foi excluído no Firebase

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState); // Alterna o estado de visibilidade
    if (!isDeleted && !isEnabled) {
      // Se o dado ainda não foi excluído e o toggle está ativado, exclui o dado no Firebase
      deleteDataFromFirebase();
    }
  };

  const deleteDataFromFirebase = async () => {
    try {
      await deleteDoc(doc(db, 'settings', 'toggleVisibility')); // Substitua 'collectionName' e 'documentId' pelos valores corretos
      setIsDeleted(true); // Define o estado de exclusão como verdadeiro
      console.log('Data deleted from Firebase successfully!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    !isDeleted && ( // Renderiza o componente apenas se o dado não tiver sido excluído
      <View style={styles.square}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{number}</Text>
        </View>
        <Text style={styles.squareText}>{text}</Text>
        <Switch
          trackColor={{ false: '#787880', true: '#4CAF50' }}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          ios_backgroundColor="#787880"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    )
  );
};

const HelpScreen = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'settings', 'toggleVisibility');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsVisible(docSnap.data().isVisible);
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
      <View style={styles.row}>
      {isVisible && <SquareWithCircle number={1} text="Served" />}
      {!isVisible && <Text style={styles.text}>No people asking for a waiter</Text>}
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
      },
      row: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      square: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 20,
        width: 150,
        height: 150,
        borderRadius: 12,
      },
      circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#593116',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      circleText: {
        color: '#E5DBD7',
        fontSize: 24,
      },
      squareText: {
        fontSize: 16,
        marginBottom: 10,
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default HelpScreen;

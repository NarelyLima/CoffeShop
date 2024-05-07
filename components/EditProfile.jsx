import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

const EditProfile = () => {
    const [name, setName] = useState(''); // State for name
    const [surname, setSurname] = useState(''); // State for surname

    const userText = name + ' ' + surname; // Concatenated name and surname

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.banner}>
                <LinearGradient colors={['#894D25', '#DCC3B9']} start={[0, 0]} end={[0, 1]} style={styles.gradient1}>
                    <LinearGradient colors={['#DCC3B9', '#894D25']} start={[0, 0]} end={[0, 1]} style={styles.profile}>
                        <TouchableOpacity>
                            <Text style={styles.add}>Add Photo</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </LinearGradient>
            </View>
            <Text style={styles.userName}>{userText || 'Your Name'}</Text>
            <TextInput onChangeText={setName} value={name} placeholder="Change Your Name" style={styles.setName} />
            <TextInput onChangeText={setSurname} value={surname} placeholder="Change Your Surname" style={styles.setSurname} />
            <TextInput placeholder="Change Your Phone Number" style={styles.setPhone} />
            <TextInput placeholder="Change Your Email" style={styles.setEmail} />
            <TouchableOpacity style={styles.but2} >
                <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                    <Text style={styles.but_txt} >Save</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.GoBack}>
                <Image source={require('../assets/left.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCC3B9'
    },
    banner: {
        position: 'absolute',
        top: 0,
        height: 270,
        width: 380
    },
    gradient1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        position: 'absolute',
        height: 123,
        width: 123,
        borderRadius: 61.5,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GoBack: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 45,
        right: 150
    },
    userName: {
        position: 'absolute',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#593116',
        top: 260
    },
    add: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#593116',
    },
    setName: {
        position: 'absolute',
        height: 50,
        width: 320,
        backgroundColor: '#D7B8AB',
        top: 340,
        borderBottomWidth: 2,
        borderColor: '#593116'
    },
    setSurname: {
        position: 'absolute',
        height: 50,
        width: 320,
        backgroundColor: '#D7B8AB',
        top: 430,
        borderBottomWidth: 2,
        borderColor: '#593116'
    },
    setPhone: {
        position: 'absolute',
        height: 50,
        width: 320,
        backgroundColor: '#D7B8AB',
        top: 520,
        borderBottomWidth: 2,
        borderColor: '#593116'
    },
    setEmail: {
        position: 'absolute',
        height: 50,
        width: 320,
        backgroundColor: '#D7B8AB',
        top: 610,
        borderBottomWidth: 2,
        borderColor: '#593116'
    },
    but2: {
        borderRadius: 20,
        position:'absolute',
        width:330,
        height:70,
        bottom:50,
        alignItems:'center',
        justifyContent:'center'
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
    }
});

export default EditProfile;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    
   
    
    const handleAddPhoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log("Permission result:", permissionResult);
        
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log("Picker result:", pickerResult);
    
        if (!pickerResult.cancelled) {
            setSelectedImage(pickerResult.uri);
        }
        if (!pickerResult.cancelled && pickerResult.assets.length > 0) {
            setSelectedImage(pickerResult.assets[0].uri);
        }
    };
    

    const userText = name + ' ' + surname;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.banner}>
                <LinearGradient colors={['#894D25', '#DCC3B9']} start={[0, 0]} end={[0, 1]} style={styles.gradient1}>
                    <View style={styles.profile}>
                        {selectedImage ? (
                            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                        ) : (
                            <TouchableOpacity onPress={handleAddPhoto}>
                                <Text style={styles.add}>Add Photo</Text>
                            </TouchableOpacity>
                        )}
                    </View>
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
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 61.5,
    },
    GoBack: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 45,
        left: 15
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
        position: 'absolute',
        width: 330,
        height: 70,
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
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

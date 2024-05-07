import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const CreateProfile = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sorry, you haven't registered with our app yet.</Text>
        <Text style={styles.text}> Would you like to create your account?</Text>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.but} >
                <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                    <Text style={styles.but_txt} >Sign Up Now!</Text>
                </LinearGradient>
            </TouchableOpacity>
        <Sidebar/>
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
        fontSize: 35,
        lineHeight: 40,
        fontWeight: 'bold',
        bottom:80,
        color: '#72401E', 
      },
      but:{
        borderRadius: 20,
        position:'relative',
        width:330,
        height:70,
        bottom:40,
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
    
  
  export default CreateProfile;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const Stats1 = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>There is no Order active</Text>
        <StatusBar style="auto" />
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
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        color: '#72401E', 
      },
    });
    
  
  export default Stats1;
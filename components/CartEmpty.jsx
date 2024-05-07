import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const CartEmpty = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Cart is Empty</Text>
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
    
  
  export default CartEmpty;
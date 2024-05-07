import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OrderPaid = () => {
    return(
        <View >
            <StatusBar style="auto" />
            <Text style={styles.text1}>Your order has been paid!</Text>
            <Text style={styles.text2}>Thank you!</Text>
            <Image source={require('../assets/726949.png')} style={styles.img} />
            <TouchableOpacity style={styles.but} >
                <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                    <Text style={styles.but_txt} >See Status Orderx</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    text1: {
        position:'relative',
      bottom:0,
      textAlign: 'center',
      fontSize: 48,
      lineHeight: 45,
      fontWeight: 'bold',
      color: '#72401E',
    },
    text2: {
        position:'relative',
        top: 30,
        textAlign: 'center',
        fontSize: 48,
        lineHeight: 45,
        fontWeight: 'bold',
        color: '#72401E',
      },
    img: {
        position:'relative',
        width: 300, // Set the width to the desired value
        height: 300, // Set the height to the desired value
        alignSelf: 'center',
        resizeMode: 'center'
    },
    but:{
        borderRadius: 20,
        position:'relative',
        width:330,
        height:70,
        top:90,
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
export default OrderPaid;
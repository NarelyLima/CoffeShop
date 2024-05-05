import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const Cart = () => {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.ord}>Your Order</Text>
        <Image source={require('../assets/table.png')} style={styles.img}/>
        <Text style={styles.table}>Table</Text>
        <Text style={styles.num}>16</Text>
        <View style={styles.obj}>
            <Text style={styles.name}>Long Espresso</Text>
            <Text style={styles.other}>With Coconut Milk</Text>
            <Text style={styles.price}>€2.50</Text>
            <Text style={styles.qnt}>x2</Text>
            <TouchableOpacity style={styles.edit}>
                <Image source={require('../assets/edit.png')} style={styles.edit}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete}>
                <Image source={require('../assets/delete.png')} style={styles.delete}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.mtd}>
            <Text style={styles.mtdt}>Method of Payment</Text>
            <Image source={require('../assets/down.png')} style={styles.right} />
            <Image source={require('../assets/images.png')} style={styles.card} />
        </TouchableOpacity>
        <View style={styles.subt}>
            <Text style={styles.sub1}>Subtotal:</Text>
            <Text style={styles.sub2}>€2.50</Text>
        </View>
        <TouchableOpacity style={styles.but} >
                    <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                        <Text style={styles.but_txt}>Finish Order</Text>
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
        alignContent:'center',
        backgroundColor:'#DCC3B9'
      },
    ord: {
        position:'absolute',
        textAlign: 'center',
        fontSize: 35,
        lineHeight: 40,
        fontWeight: 'bold',
        top:50,
        color: '#72401E', 
      },
    img: {
        position:'absolute',
        right:100,
        top:120
      },
    table: {
        position:'absolute',
        color:'#72401E',
        fontSize:30,
        fontWeight:'bold',
        top:120,
        right:20  
      },
    num: {
        position:'absolute',
        color:'#72401E',
        fontSize:25,
        top:120,
        left:120  
      },
    obj: {
        position: 'absolute',
        width: 375,
        height: 150,
        backgroundColor: '#DCC3B9',
        borderTopWidth: 1, // Add border at the top
        borderBottomWidth: 1, // Add border at the bottom
        borderColor: '#000', // Border color
        top:180
    },
    name: {
        position:'absolute',
        color:'#72401E',
        fontSize:30,
        fontWeight:'bold',
        top:20,
        left:20
    },
    other: {
        position:'absolute',
        color:'#72401E',
        fontSize:20,
        top:60,
        left:20
    },
    price: {
        position:'absolute',
        color:'#72401E',
        fontSize:30,
        fontWeight:'bold',
        top:20,
        right:20
    },
    qnt: {
        position:'absolute',
        color:'#72401E',
        fontSize:30,
        fontWeight:'bold',
        bottom:20,
        right:20
    },
    edit: {
        position:'absolute',
        height:30,
        width:30,
        bottom:10,
        left:20
        },
    delete: {
        position:'absolute',
        height:30,
        width:30,
        bottom:10,
        left:60
        },
    
    but:{
        borderRadius: 0,
        position:'absolute',
        width:376,
        height:60,
        bottom:93,
        alignItems:'center',
        justifyContent:'center'

    },
    butGradient: {
        flex: 1,
        borderRadius: 0,
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
    mtd: {
      position: 'absolute',
      width: 375,
      height: 50,
      backgroundColor: '#DCC3B9',
      borderWidth:1,
      borderColor: '#000', // Border color
      top:580,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
  },
    mtdt: {
      position:'absolute',
      fontSize:20,
      fontWeight:'bold'
    },
    right: {
      position:'absolute',
      right:55
    },
    card: {
      position:'absolute',
      left:50,
      height:40,
      width:40
    },
    subt: {
      position: 'absolute',
      width: 375,
      height: 30,
      backgroundColor: '#DCC3B9',
      borderWidth:1,
      borderColor: '#000', // Border color
      top:630,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
  },
  sub1: {
    position:'absolute',
    fontSize:20,
    fontWeight:'bold',
    left:20
  },
  sub2: {
    position:'absolute',
    fontSize:20,
    fontWeight:'bold',
    right:20
  },
    });
    
export default Cart;
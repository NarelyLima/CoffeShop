import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const Profile = () => {
    const points='300';
    const menuItems = [
        { id: '1', name: 'Long Espresso', price: '$2.50', image: require('../assets/espresso.png') },
        { id: '2', name: 'Caffe Latte', price: '$3.50', image: require('../assets/caffe-latte.png') },
    ];
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.banner}>
            <LinearGradient colors={['#894D25', '#DCC3B9']} start={[0, 0]} end={[0, 1]} style={styles.gradient1}>
                <LinearGradient colors={['#DCC3B9', '#894D25']} start={[0, 0]} end={[0, 1]} style={styles.profile}>
                    <Image source={require('../assets/ef.png')} style={styles.profilePic}/>
                </LinearGradient>
                <Text style={styles.yourname}>Your Name</Text>
                <TouchableOpacity style={styles.edit}>
                    <Image source={require('../assets/edit.png')} style={styles.edit}/>
                </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.cafePoints}>Cafe Points</Text>
            <Image source={require('../assets/coin.png')} style={styles.coin}/>
            <Text style={styles.coinsText}>{points}</Text>
            <Text style={styles.YourGoTo}>Your Go-To</Text>
            <View style={styles.menuContainer}>
                    {menuItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.item}>
                <View style={styles.maro}>
                    <Image source={item.image} style={styles.imagine} />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
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
      banner: {
        position:'absolute',
        top:0,
        height:270,
        width:380
      },
      gradient1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profile: {
        position:'absolute',
        height:123,
        width:123,
        borderRadius:61.5,
        left:30,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
      },
      edit: {
        position:'absolute',
        height:25,
        width:25,
        right:10,
        top:30,
        opacity: 0.5,

      },
      yourname: {
        fontSize:40,
        fontWeight:'bold',
        color:'#593116',
        top:70,
        left:60
      },
      profilePic: {
        height:80,
        width:60
      },
      cafePoints: {
        position:'absolute',
        fontSize:35,
        fontWeight:'bold',
        color:'#593116',
        top:320,
        left:30
      },
      coin: {
        position:'absolute',
        height:30,
        width:30,
        top:325,
        left:220
      },
      coinsText: {
        position:'absolute',
        left:260,
        top:325,
        fontSize:30,
        color:'#593116',
      },
      YourGoTo: {
        position:'absolute',
        fontSize:35,
        fontWeight:'bold',
        color:'#593116',
        top:380,
        left:30
      },
      menuContainer: {
        position:'absolute',
        flexDirection: 'row', // Ensures items are displayed horizontally
        marginTop: 430,
        marginLeft:20 // Adjust this value according to your layout
      },
      item: {
        zIndex: 999,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        width: 150,
        height: 150,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center', // Align content vertically
        justifyContent: 'center', // Align content horizontally
      },
      name: {
        fontSize: 14, // Adjust font size as needed
        fontWeight: 'bold',
      },
      price: {
        fontSize: 12, // Adjust font size as needed
        color: '#666', // Adjust color as needed
      },
      maro: {
        backgroundColor: '#593116',
        height: 90,
        width:120,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
      imagine: {
        height: 80,
        width: 80,
      },    
    });
    
  
  export default Profile;
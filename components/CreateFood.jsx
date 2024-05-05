import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreateFood = () => {
    return(
        <View >
            <StatusBar style="auto" />
            <Text style={styles.text1}>Create new food</Text>
            <Text style={styles.text1}>Sortiments</Text>

            <TouchableOpacity style={styles.but} >
                <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                    <Text style={styles.but_txt} >Add new sortiments</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.text2}>Drinks</Text>
            <TouchableOpacity style={styles.but} >
                <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.butGradient}>
                    <Text style={styles.but_txt} >Add new drinks</Text>
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
export default CreateFood;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreateFood = () => {
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            
            <TouchableOpacity style={styles.GoBack}>
                <Image source={require('../assets/buton.png')} style={styles.image} />
            </TouchableOpacity>

            
            <View style={styles.top}>
                <Text style={styles.text1}>Create new food</Text>
            </View>
            
            
            <View style={styles.section}>
                <Text style={[styles.text, styles.textLeft]}>Sortiments</Text>
                <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>+ Add new sortiments</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            
                <Text style={[styles.text, styles.textLeft]}>Drinks</Text>
                <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['#C06A30', '#593116']} start={[0, 0]} end={[0, 1]} style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>+ Add new drinks</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCC3B9', 
    },
    GoBack: {
        position: 'absolute',
        bottom: 720,
        right: 280,
        transform: [{ rotate: '90deg' }], 
    },
    image: {
        width: 30, 
        height: 30, 
    },
    text1: {
        marginTop: 100,
        marginVertical: 60,
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#72401E',
    },
    section: {
        marginBottom: 30,
        alignItems: 'flex-start',
    },
    text: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#72401E',
    },
    textLeft: {
        marginLeft: 10, 
    },
    button: {
        borderRadius: 20,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72401E',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonGradient: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
});

export default CreateFood;

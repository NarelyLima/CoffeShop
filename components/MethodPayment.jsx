    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

    const MethodPayment = () => {
        return(
            <View style={styles.background}>
                <StatusBar style="auto" />
                <TouchableOpacity style={styles.div1}>
                    <Image source={require('../assets/Apple_Pay-Logo.wine.png')} style={styles.AP_img} resizeMode="contain" />
                    <Text style={styles.AP_text}>Apple Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.div2}>
                    <Image source={require('../assets/images.png')} style={styles.AP_img}  />
                    <Text style={styles.AP_text}>Debit or Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.div3}>
                    <Image source={require('../assets/043cf1cbb0e0b869fc1bfb05fe6c35df.png')} style={styles.AP_img}  />
                    <Text style={styles.AP_text}>Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.GoBack}>
                    <Image source={require('../assets/buton.png')} />
                </TouchableOpacity>
            </View>
        );
    }
    const styles = StyleSheet.create({
        background: {
            alignItems: 'center',
            alignContent: 'center',
        },
        GoBack: {
            position:'absolute',
            bottom:410,
            right:280,
        },
        div1: {
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius:10,
            width: 300,
            height: 75,
            bottom:150,
            alignItems:'center',
            justifyContent:'center'
        },
        div2: {
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius:10,
            width: 300,
            height: 75,
            bottom:120,
            alignItems:'center',
            justifyContent:'center'
        },
        div3: {
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius:10,
            width: 300,
            height: 75,
            bottom:90,
            alignItems:'center',
            justifyContent:'center'
        },
        AP_img: {
            width: 40,
            height: 40,
            right: 100,
            top:12,
            width:50,
            height:50,
        },
        AP_text: {
            color: '#471200',
            fontWeight:'bold',
            fontSize:20,
            bottom:25,
            left:10,
            alignContent:'center'
        }
    });
    export default MethodPayment;
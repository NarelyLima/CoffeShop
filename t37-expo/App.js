import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitialScreen from './ComponentesInitialScreen/InitialScreen';
import PerfilScreen from './ComponentesInitialScreen/PerfilScreen';
import ChoosePerfil from './ComponentesInitialScreen/ChoosePerfil';
import RegisterScreen from './ComponentesInitialScreen/RegisterScreen';
import LoginScreen from './ComponentesInitialScreen/LoginScreen';
import OrderView from './ComponentesEmployee/OrderView';

export default function App() {
  return (
    <NavigationContainer>
      <OrderView/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <NavigationContainer>
//<OrderView/>
//</NavigationContainer>

// <View style={styles.container}>
//     {/* <InitialScreen/> */}
//      {/* <PerfilScreen/> */}
//      {/* <ChoosePerfil/> */}
//    {/* <RegisterScreen/> */}
//     {/* <LoginScreen/> */}     
//   <StatusBar style="auto" />
// </View>
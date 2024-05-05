import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from './ComponentesInitialScreen/InitialScreen';
import PerfilScreen from './ComponentesInitialScreen/PerfilScreen';
import ChoosePerfil from './ComponentesInitialScreen/ChoosePerfil';
import RegisterScreen from './ComponentesInitialScreen/RegisterScreen';
import LoginScreen from './ComponentesInitialScreen/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <InitialScreen/> */}
      {/* <PerfilScreen/> */}
      {/* <ChoosePerfil/> */}
      {/* <RegisterScreen/> */}
      <LoginScreen/>

      <StatusBar style="auto" />
    </View>
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

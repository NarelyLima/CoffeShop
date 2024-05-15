import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from './ComponentesInitialScreen/InitialScreen';
import PerfilScreen from './ComponentesInitialScreen/PerfilScreen';
import ChoosePerfil from './ComponentesInitialScreen/ChoosePerfil';
import RegisterScreen from './ComponentesInitialScreen/RegisterScreen';
import LoginScreen from './ComponentesInitialScreen/LoginScreen';
import OrderView from './ComponentesEmployee/OrderView';

export default function EmployeeFlow() {
  return (
    <OrderView/>
  );
}

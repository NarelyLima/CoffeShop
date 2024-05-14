import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Welcome_page from './components/Welcome_page';
import MethodPayment from './components/MethodPayment';
import DELIVERED from './components/DELIVERED';
import OrderPaid from './components/OrderPaid';
import PENDING from './components/PENDING';
import Feedback from './components/Feedback';
import LongEspresso from './components/LongEspresso';
import Modaltest from './components/Modaltest'
import CreateProfile from './components/CreateProfile';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Stats1 from './components/Stats1';
import Stats2 from './components/Stats2';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Sidebar from './components/Sidebar';
import CartEmpty from './components/CartEmpty';
import CafeLatte from './components/CafeLatte';
import Cappuccino from './components/Cappuccino';
import Mocha from './components/Mocha';
import Americano from './components/Americano';
import Macchiato from './components/Macchiato';
import FlatWhite from './components/FlatWhite';
import Soda from './components/Soda';
import NaturalJuice from './components/NaturalJuice';
import Tea from './components/Tea';
import HotChoco from './components/HotChoco';
import Milkshake from './components/Milkshake';
import Pastel from './components/Pastel';
import Bolo from './components/Bolo';
import Pao from './components/Pao';
import Queque from './components/Queque';
import EmployeeFlow from './t37-expo/EmployeeFlow';
import InitialScreen from './t37-expo/ComponentesInitialScreen/InitialScreen';
import PerfilScreen from './t37-expo/ComponentesInitialScreen/PerfilScreen';
import ChoosePerfil from './t37-expo/ComponentesInitialScreen/ChoosePerfil';
import LoginScreen from './t37-expo/ComponentesInitialScreen/LoginScreen';
import RegisterScreen from './t37-expo/ComponentesInitialScreen/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChoosePerfil" component={ChoosePerfil} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#DCC3B9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%'
//   },
// });
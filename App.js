import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Welcome_page from './components/Welcome_page';
import MethodPayment from './components/MethodPayment';
import DELIVERED from './components/DELIVERED';
import CreateFood from './components/CreateFood';
import PENDING from './components/PENDING';
import Feedback from './components/Feedback';
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
import ChoosePerfil from './ComponentesInitialScreen/ChoosePerfil'
import LoginScreen from './ComponentesInitialScreen/LoginScreen';
import SyncData from './SyncDataWithFirestore';
import Navigator from './navigation/Navigator';
import EmployeeFlow from './Employee/EmployeeFlow';
import InitialScreen from './Employee/ComponentesInitialScreen/InitialScreen';
import PerfilScreen from './Employee/ComponentesInitialScreen/PerfilScreen';
import ChoosePerfil from './Employee/ComponentesInitialScreen/ChoosePerfil';
import LoginScreen from './Employee/ComponentesInitialScreen/LoginScreen';
import RegisterScreen from './Employee/ComponentesInitialScreen/RegisterScreen';
import AdministratorFlow from './Administrator/AdministratorFlow';
import CreateItemMenu from './Administrator/MenuFlow/CreateItemMenu';
import SettingsLogin from './Administrator/SettingsFlow/SettingsLogin';
import SettingsEdit from './Administrator/SettingsFlow/SettingsEdit';
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
        <Stack.Screen name="EmployeeFlow" component={EmployeeFlow} options={{ headerShown: false }}/>
        <Stack.Screen name="AdministratorFlow" component={AdministratorFlow} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateItemMenu" component={CreateItemMenu} />
        <Stack.Screen name="SettingsLogin" component={SettingsLogin} />
        <Stack.Screen name="SettingsEdit" component={SettingsEdit} />
     </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
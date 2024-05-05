import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome_page from './components/Welcome_page';
import MethodPayment from './components/MethodPayment';
import DELIVERED from './components/DELIVERED';
import CreateFood from './components/CreateFood';
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

const App = () => {
  return (
    <View style={styles.container}>
      <Menu/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC3B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
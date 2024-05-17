import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
  }
});
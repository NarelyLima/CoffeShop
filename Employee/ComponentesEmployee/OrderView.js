import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import OrderScreen from './OrderScreen';
import HelpScreen from './HelpScreen';
import FeedbackScreen from './FeedBackScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

const OrderView = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#593116',
          inactiveTintColor: '#EDB098',
          style: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Order" component={OrderScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="assignment" size={size} color={color} />) }} />
        <Tab.Screen name="Help" component={HelpScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="help" size={size} color={color} />) }} />
        <Tab.Screen name="Feedback" component={FeedbackScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="feedback" size={size} color={color} />) }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="settings" size={size} color={color} />) }} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightblue',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default OrderView;
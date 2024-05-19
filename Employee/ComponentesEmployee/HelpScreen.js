import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SquareWithCircle = ({ number, text }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.square}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{number}</Text>
      </View>
      <Text style={styles.squareText}>{text}</Text>
      <Switch
        trackColor={{ false: '#787880', true: '#4CAF50' }} // Define a cor do trilho do toggle
        thumbColor={isEnabled ? '#ffffff' : '#ffffff'} // Define a cor do botão do toggle
        ios_backgroundColor="#787880"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const HelpScreen = () => {
  return (
      <View style={styles.container}>
      <View style={styles.row}>
        <SquareWithCircle number={1} text="Served" />
        <SquareWithCircle number={4} text="Served" />
      </View>
      <View style={styles.row}>
        <SquareWithCircle number={2} text="Served" />
        <SquareWithCircle number={7} text="Served" />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5DBD7',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      square: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 20,
        width: 150,
        height: 150,
        borderRadius: 12,
      },
      circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#593116',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      circleText: {
        color: '#E5DBD7',
        fontSize: 24,
      },
      squareText: {
        fontSize: 16,
        marginBottom: 10,
      },
});

export default HelpScreen;

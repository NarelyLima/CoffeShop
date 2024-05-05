import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';

const FeedbackScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const segmentedOptions = ['Detailed', 'Aggregate', 'Relative'];

  return (
    <View style={styles.container}>
      <SegmentedControl
        style={styles.segmentedControl}
        values={segmentedOptions}
        selectedIndex={selectedIndex}
        onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
        tintColor="#593116" // Cor do controle
        activeFontStyle={{ color: 'white' }} 
      />
      <Text style={styles.selectedText}>Selected Option: {segmentedOptions[selectedIndex]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5DBD7',
  },
  segmentedControl: {
    width: '80%',
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 20,
  },
});

export default FeedbackScreen;

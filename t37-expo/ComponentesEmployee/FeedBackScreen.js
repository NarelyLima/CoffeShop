import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import FeedbackDetailed from './FeedbackDetailed';

const FeedbackScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const segmentedOptions = ['Detailed', 'Aggregate', 'Relative'];

  const renderSegmentContent = () => {
    switch (selectedIndex) {
      case 0:
        return <View><FeedbackDetailed/></View>;
      case 1:
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Aggregate View</Text></View>;
      case 2:
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Relative View</Text></View>;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <SegmentedControl
          values={segmentedOptions}
          selectedIndex={selectedIndex}
          onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
          tintColor="#593116"
          activeFontStyle={{ color: 'white' }}
        />
      </View>
      <View style={{ flex: 1 }}>
        {renderSegmentContent()}
      </View>
    </View>
  );
};

export default FeedbackScreen;

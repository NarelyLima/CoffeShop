import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const FeedbackDetailed = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={styles.rectangle}>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>Title {item}</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star, starIndex) => (
                <View key={starIndex} style={[styles.star, { backgroundColor: `#${index}${star}${star}` }]} />
              ))}
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.circle}>
              <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.image} />
            </View>
            <Text style={styles.description}>Description for Item {item}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: '#E5DBD7',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  star: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    textAlign: 'center',
  },
});

export default FeedbackDetailed;

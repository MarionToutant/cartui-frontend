import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// EXPORT FUNCTION

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
}

// STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
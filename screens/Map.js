import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// EXPORT FUNCTION

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map Page</Text>
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
  

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// EXPORT FUNCTION

export default function Connect({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Connect Page</Text>
      <Button 
        title="Go"
        color='#00B8A9'
        onPress={() => navigation.navigate('Home')}
      >  
      </Button>
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
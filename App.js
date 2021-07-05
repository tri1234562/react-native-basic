import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello World hehe');
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title='Click Me To Start'
        onPress={() => {
          setText('hahahahaha the text has changed');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

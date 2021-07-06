import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeData } from '../../data/testSaga/testActions'

const DashBoard = () => {
  const data = useSelector(state => state.testReducer)
  const dispatch = useDispatch()
  const { content, name, count } = data
  const newCount = count + 1
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.textCenter}>
        <Text style={styles.redText}>name: {name}</Text>
        <Text style={styles.redText}>text: {content}</Text>
        <Text style={styles.redText}>count: {count}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => {dispatch(handleChangeData({
          name: "New Name",
          content: "Hello React-native App",
          count: newCount,
        }))}}>
          <Text>Click To Change Content</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white'
  },
  textCenter: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
  },
  btn: {
    backgroundColor: '#30BE76',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default DashBoard;

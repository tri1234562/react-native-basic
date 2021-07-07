import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseAction,
  decreaseAction,
  resetCountAction,
} from '../../store/actions';

const DashBoard = () => {
  const data = useSelector((state) => state.testReducer);
  const dispatch = useDispatch();
  const { content, name, count } = data;
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.textCenter}>
        <Text style={styles.redText}>count: {count}</Text>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              dispatch(increaseAction());
            }}
          >
            <Text>Increase Count</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              dispatch(decreaseAction());
            }}
          >
            <Text>Decrease Count</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              dispatch(resetCountAction({ count: 0 }));
            }}
          >
            <Text>Reset Count</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
  textCenter: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
  },
  btns: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#30BE76',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default DashBoard;

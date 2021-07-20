import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './inputFieldStyles';

const CustomTextInput = (props) => {
  const { onChangeText, value, secureTextEntry, style, errorMessage } = props;
  return (
    <View>
      <TextInput
        style={[styles.defaultStyle, style]}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default CustomTextInput;

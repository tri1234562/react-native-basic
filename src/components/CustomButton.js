import React from "react";
import { View, TouchableOpacity, StyleSheet,Text } from "react-native";

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} >
     <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...props.textStyle}}>{props.title}</Text>
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   borderRadius: 8,
   paddingVertical: 14,
   paddingHorizontal: 10,
   backgroundColor: '#f01d71',
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
  }
});

export default CustomButton;
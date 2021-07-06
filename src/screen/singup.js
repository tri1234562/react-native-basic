import * as React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.mainLayout}>
      <Text>SignUp Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignUpScreen;

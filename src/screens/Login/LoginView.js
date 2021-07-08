import * as React from "react";
import { Button, View, Text } from "react-native";
import styles from "./LoginStyles";

const LoginView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default LoginView;

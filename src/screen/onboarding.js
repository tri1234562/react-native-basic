import * as React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.mainLayout}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Go to Login Screen"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
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

export default OnBoardingScreen;

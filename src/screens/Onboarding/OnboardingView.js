import * as React from "react";
import { Button, View, Text } from "react-native";
import styles from "./OnboardingStyles";
import { withNavigation } from 'react-navigation';

const OnboardingView = ({ navigation }) => {
  return (
    <View style={styles.container}>
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

export default OnboardingView;

import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./OnboardingStyles";
import LinearGradient from "react-native-linear-gradient";

const OnboardingView = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/Background.png")}/>
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0.2)",
          "rgba(255, 255, 255, 0.0)",
        ]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.95 }}
        style={styles.linearGradientContainer}
      />
      <View style={styles.mainContent}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Logo.png")}/>
        <Text style={styles.textStyle}>
          scratch
        </Text>
      </View>
    </View>
  );
};

export default OnboardingView;

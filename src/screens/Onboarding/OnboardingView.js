import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./OnboardingStyles";
import LinearGradient from "react-native-linear-gradient";

const OnboardingView = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/Background.png")}
      ></Image>
      <LinearGradient
        colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.95 }}
        style={styles.linearGradientContainer}
      />
       <View style={styles.mainContent}> 
       <Image style={styles.image} source={require("../../assets/images/Logo.png")}></Image>
       <Text style={styles.textStyle}>scratch</Text>
       </View>
    </View>
  );
};

export default OnboardingView;

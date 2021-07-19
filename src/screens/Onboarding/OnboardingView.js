import * as React from "react";
import {
  View,
  Text,
  Image,
  PixelRatio,
  Dimensions,
  Button,
} from "react-native";
import styles from "./OnboardingStyles";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";

const colorLinearPhone = [
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 0.7)",
  "rgba(255, 255, 255, 0.6)",
  "rgba(255, 255, 255, 0.6)",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.1)",
  "rgba(255, 255, 255, 0.0)",
];

const colorLinearTablet = [
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 0.8)",
  "rgba(255, 255, 255, 0.6)",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.1)",
  "rgba(255, 255, 255, 0.1)",
];

const windowSize = Dimensions.get("window");
const pixelDesity = PixelRatio.get();

const ContentViewPhone = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/Background.png")}
      />
      <LinearGradient
        colors={colorLinearPhone}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.95 }}
        style={styles.linearGradientContainer}
      />
      <View style={styles.mainContentPhone}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Logo.png")}
        />
        <Text style={styles.textStyle}>
          scratch
        </Text>
      </View>
    </View>
  );
};

const ContentViewTablet = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundTablet}
        source={require("../../assets/images/Background.png")}
      />
      <LinearGradient
        colors={colorLinearTablet}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.95 }}
        style={styles.linearGradientContainerTablet}
      />
      <View style={styles.mainContentTablet}>
        <View style={styles.logoTabletStyle}>
          <Image
            style={styles.imageTablet}
            source={require("../../assets/images/Logo.png")}
          />
          <Text style={styles.textStyle}>scratch</Text>
        </View>
        <Text 
        style={styles.largeText} 
        numberOfLines={2}>
          Join over 50 millions people sharing recipes everyday
        </Text>
        <Text 
        style={styles.smallText} 
        numberOfLines={2}>
          Never run out of ideas again. Try new foods, ingredients, cooking
          style, and more
        </Text>
        <View style={styles.buttonGroup}>
            <CustomButton 
            style={styles.joinButton} 
            textStyle={styles.joinButtonText}
            title="Join Scratch" />
            <CustomButton 
            style={styles.learnmoreButton} 
            textStyle={styles.learnmoreButtonText}
            title="Learn more" />
        </View>
        {/* <View style={styles.buttonGroup}>

        <Button title="Learn More" />
        </View> */}
      </View>
    </View>
  );
};

const OnboardingView = () => {
  if (windowSize.width < 600) {
    return <ContentViewPhone />;
  } else return <ContentViewTablet />;
};

export default OnboardingView;

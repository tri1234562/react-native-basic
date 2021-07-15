import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mainContent: {
    top: "40%",
    alignItems: "center",
    position: "absolute",
    flexDirection: 'row',
  },
  linearGradientContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: 25,
    height: 36,
  },
  background: {
    resizeMode: "contain",
  },
  textStyle: {
    padding: 15,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
});

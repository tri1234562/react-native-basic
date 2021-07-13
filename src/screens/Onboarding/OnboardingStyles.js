import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    top: "40%",
    width: '100%',
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    padding: 15,
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
  },
});

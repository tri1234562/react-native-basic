import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mainContentPhone: {
    top: '40%',
    alignItems: "center",
    flexDirection: 'row',
    position: "absolute",
  },
  linearGradientContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradientContainerTablet: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: '22%',
  },
  image: {
    width: 25,
    height: 36,
  },
  imageTablet: {
    width: 17,
    height: 25,
  },
  background: {
    resizeMode: "contain",
  },
  textStyle: {
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
  mainContentTablet: {
    alignItems: "center",
    top: 56,
    position: "absolute",
  },
  logoTabletStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  largeText: {
    fontSize: 40,
    paddingHorizontal: 134,
    // alignItems: 'center',
    textAlign: 'center',
    letterSpacing: -0.5,
    fontFamily: 'Nunito-SemiBold',
    paddingTop: 131,
  },
  smallText: {
    width: 314,
    paddingTop: 8,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: "#A8A8A8",
  },
  backgroundTablet: {
    resizeMode: "cover",
    width: "145%",
    opacity: 0.3,
  },
  buttonGroup: {
    flexDirection: 'row',
    paddingTop: 50,
    justifyContent: 'center',
  },
  joinButton: {
    width: 239,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#30BE76',
    borderRadius: 10,
  },
  joinButtonText: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  learnmoreButtonText: {
    color: '#30BE76',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  learnmoreButton: {
    width: 239,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#30BE76',
    borderWidth: 2,
  }
  // logo: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   bottom: 893,
  // }
});

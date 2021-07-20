import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Nunito'
  },
  backgroundContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 25,
    paddingBottom: 120,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  icon: {
    height: 45,
    width: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: '400',
  },
  subTitle: {
    marginTop: 40,
    fontSize: 23,
    fontWeight: '400',
  },
  titleContent: {
    color: '#606060',
    fontSize: 18,
    marginBottom: 40,
  },
  titleInput: {
    color: '#A8A8A8',
    fontSize: 18,
  },
  inputStyles: {
    color: 'black',
  },
  passwordTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  forgotContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#606060',
    fontSize: 18,
  },
  actionContainer: {
    flex: 1,
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: '#30BE76',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleCreateAccount: {
    fontSize: 17,
    color: '#A8A8A8',
  },
  actionCreateAccount: {
    marginTop: 8,
    fontSize: 18,
    color: '#30BE76',
  },
});

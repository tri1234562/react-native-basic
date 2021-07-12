import { Dimensions, StyleSheet } from 'react-native';

const Colors = {
    primary: '#30BE76',
    background: 'white',
    divider:'#CCC',
    error: '#B00020',
    success: '#6200EE',
    dark: '#030F09',
    lightDark: '#606060',
    fade: '#A8A8A8',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
    },
    header: {
        height: Dimensions.get('window').height * 0.3,
        alignItems: 'center',
    },
    pageTitle: {
        marginLeft: 25,
        fontSize: 24,
        fontWeight:'bold',
        fontFamily: 'Nunito',
    },
    image: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderBottomRightRadius: 100,
    },
    logoImage: {
        marginVertical: 40,
        marginLeft: 25,
        width: 102,
        height: 28,
    },
    formContainer: {
        marginTop: 16,
        paddingHorizontal: 25,
    },
    formTitle: {
        marginBottom: 30,
        color: Colors.lightDark,
        fontSize: 14,
    },
    inputContainer: {
        marginBottom: 30,
    },
    inputLabel: {
        color: Colors.fade,
        fontSize: 14,
        fontFamily: 'Nunito',
    },
    inputField: {
        paddingBottom: 5,
        color: Colors.dark,
        fontSize: 16,
        fontFamily: 'Nunito',
        borderBottomWidth: 1,
    },
    inputEmpty: {
        borderBottomColor: Colors.divider,
    },
    inputSuccess: {
        borderBottomColor: Colors.success,
    },
    inputError: {
        borderBottomColor: Colors.error,
    },
    inputErrorMessage: {
        paddingTop: 5,
        color: Colors.error,
        fontSize: 14,
        fontFamily: 'Nunito',
    },
    actionsContainer: {
        marginBottom: 30,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    submit: {
        marginBottom: 30,
        padding: 15,
        width: '100%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        borderRadius: 10,
    },
    submitText: {
        color: 'white',
        fontFamily: 'Nunito',
    },
    textBtn: {
        color: Colors.primary,
        fontFamily: 'Nunito',
    },
});

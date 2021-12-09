import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const appStyles = StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingBottom: 20,
		width: '100%',
		//height: SCREEN_HEIGHT,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	luckeLogo: {
        //flex: 1,
		//height: 90,
		//maxWidth: (SCREEN_WIDTH / 4),
		resizeMode: 'center'
	},
	bgImage: {
	  flex: 1,
	  top: 0,
	  left: 0,
	  width: '100%',
	  height: SCREEN_HEIGHT,
	  justifyContent: 'center',
	  alignItems: 'center',
    },
	logoContainer: {
        //flex: 1,
	  //flex: 2,
	  //height: 150,
	  backgroundColor: 'transparent',
	  justifyContent: 'center',
	},
	titleContainer: {
        //flex: 1,
	  //flex: 2,
	  //height: 150,
	  backgroundColor: 'transparent',
	  justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 30,
	},
	formContainer: {
        //flex: 2,
	  backgroundColor: 'white',
	  width: SCREEN_WIDTH - 30,
      maxWidth: 400,
	  borderRadius: 10,
	  paddingTop: 32,
	  paddingBottom: 32,
	  alignItems: 'center',
	},
	loginText: {
	  fontSize: 16,
	  fontWeight: 'bold',
	  color: 'white',
    },
	titleText: {
	  color: 'white',
	  fontSize: 30,
	  //fontFamily: 'regular',
	  textAlign: 'center',
	},
	loginTextButton: {
	  fontSize: 16,
	  color: 'white',
	  fontWeight: 'bold',
	},
	loginButton: {
	  backgroundColor: 'rgba(232, 147, 142, 1)',
	  borderRadius: 10,
	  height: 50,
	  width: 200,
    },
	backendButton: {
	  backgroundColor: 'transparent',
      borderColor: 'rgba(232, 147, 142, 1)',
	  borderRadius: 10,
      borderWidth: 3,
	  height: 50,
	  width: 200,
    },
    helpContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
  	},
	safeArea: {
		flex: 1,
		paddingTop: 50,

	},
	scrollView: {
		//backgroundColor: 'pink',
		marginHorizontal: 20,

	}
});

export default appStyles;
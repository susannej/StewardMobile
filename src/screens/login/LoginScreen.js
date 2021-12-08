import { blockStatement } from '@babel/types';
import React, {useState, createRef} from 'react';
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import loginStyles from './LoginStyles';

import storage from '../../db/Storage'
import Loader from '../components/Loader'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('../../../img/bg.jpeg');
const LUCKE_LOGO = require('../../../img/cropped-logo-lucke-white.png');

//export default class LoginScreen extends React.Component {
const LoginScreen = ({navigation}) => {

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState('');

	const passwordInputRef = createRef();

	const handleSubmitPress = () => {
		setErrortext('');
		if (!userEmail) {
			alert('Please fill Email');
			return;
		}
		if (!userPassword) {
			alert('Please fill Password');
			return;
		}
		setLoading(true);
		let dataToSend = {email: userEmail, password: userPassword};
		let formBody = [];
		for (let key in dataToSend) {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(dataToSend[key]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');

		fetch('http://localhost:3000/api/user/login', {
			method: 'POST',
			body: formBody,
			headers: {
				//Header Defination
				'Content-Type':
					'application/x-www-form-urlencoded;charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//Hide Loader
				setLoading(false);
				console.log(responseJson);
				// If server response message same as Data Matched
				if (responseJson.status === 'success') {
					storage.setItem('user_id', responseJson.data.email);
					console.log(responseJson.data.email);
					navigation.replace('DrawerNavigationRoutes');
				} else {
					setErrortext(responseJson.msg);
					console.log('Please check your email id or password');
				}
			})
			.catch((error) => {
				//Hide Loader
				setLoading(false);
				console.error(error);
			});
	};

		return (
			<View style={loginStyles.container}>
				<ImageBackground source={BG_IMAGE} style={loginStyles.bgImage}>
					<View style={StyleSheet.logoContainer}>
						<Image source={LUCKE_LOGO} style={loginStyles.luckeLogo}/>
					</View>
					<View style={loginStyles.titleContainer}>
						<View>
							<Text style={loginStyles.titleText}>Steward Mobile</Text>
						</View>
					</View>
					<View style={loginStyles.formContainer}>
						<Input
							//value={username}
							autoFocus={true}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							returnKeyType="next"
							inputStyle={{marginLeft: 10, color: 'grey'}}
							placeholder={'Benutzername'}
							containerStyle={{
								borderBottomColor: 'rgba(0, 0, 0, 0.38)',
							}}
							//ref={emailInput}
							//onSubmitEditing={() => passwordInput.current.focus()}
							//onChangeText={(text) => setEmail(text)}
							//errorMessage={
							//isEmailValid ? '' : 'Please enter a valid email address'
							//}
						/>
						<Input
							//value={username}
							autoFocus={false}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							returnKeyType="next"
							inputStyle={{marginLeft: 10, color: 'grey'}}
							placeholder={'Passwort'}
							containerStyle={{
								borderBottomColor: 'rgba(0, 0, 0, 0.38)',
							}}
							//ref={emailInput}
							//onSubmitEditing={() => passwordInput.current.focus()}
							//onChangeText={(text) => setEmail(text)}
							//errorMessage={
							//isEmailValid ? '' : 'Please enter a valid email address'
							//}
						/>
						<Button
							buttonStyle={loginStyles.loginButton}
							containerStyle={{marginTop: 32, flex: 0}}
							activeOpacity={0.8}
							title='Anmelden'
							//onPress={isLoginPage ? login : signUp}
							onPress={() => navigation.replace('DrawerNavigationRoutes')}
							titleStyle={loginStyles.loginTextButton}
							//loading={isLoading}
							//disabled={isLoading}
						/>
						<Button
							buttonStyle={loginStyles.backendButton}
							containerStyle={{marginTop: 32, flex: 0}}
							title={'Konfiguration ...'}
							titleStyle={{color: 'rgba(0, 0, 0, 0.38)'}}
							//onPress={() => Alert.alert('🤔', 'https://10.101.144.20')}
							onPress={() => navigation.navigate('LoginConfigScreen')}
						/>
					</View>
				</ImageBackground>
			</View>
		);

}
export default LoginScreen;

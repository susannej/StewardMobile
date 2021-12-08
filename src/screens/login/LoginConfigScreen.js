import { blockStatement } from '@babel/types';
import React from 'react';
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import loginStyles from './LoginStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('../../../img/bg.jpeg');
const LUCKE_LOGO = require('../../../img/cropped-logo-lucke-white.png');

export default class LoginConfigScreen extends React.Component {

	render() {
		return (
			<View style={loginStyles.container}>
				<ImageBackground source={BG_IMAGE} style={loginStyles.bgImage}>
					<View style={loginStyles.titleContainer}>
						<View>
							<Text style={loginStyles.titleText}>Konfiguration</Text>
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
							placeholder={'Backend URL'}
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
							title='Speichern'
							//onPress={isLoginPage ? login : signUp}
							titleStyle={loginStyles.loginTextButton}
							//loading={isLoading}
							//disabled={isLoading}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
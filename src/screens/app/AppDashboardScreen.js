import { blockStatement } from '@babel/types';
import React from 'react';
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import appStyles from './AppStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
//const BG_IMAGE = require('./img/bg.jpeg');
//const LUCKE_LOGO = require('./img/cropped-logo-lucke-white.png');

export default class AppDashboardScreen extends React.Component {

	render() {
		return (
			<View style={appStyles.container}>
					<View style={appStyles.titleContainer}>
						<View>
							<Text style={appStyles.titleText}>Dashboard</Text>
						</View>
					</View>
					<View style={appStyles.formContainer}>
						<Input
							//value={username}
							autoFocus={true}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							returnKeyType="next"
							inputStyle={{marginLeft: 10, color: 'grey'}}
							placeholder={'Dashboard Screen'}
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
							buttonStyle={appStyles.loginButton}
							containerStyle={{marginTop: 32, flex: 0}}
							activeOpacity={0.8}
							title='Speichern'
							//onPress={isLoginPage ? login : signUp}
							titleStyle={appStyles.loginTextButton}
							//loading={isLoading}
							//disabled={isLoading}
						/>
						<Button
							buttonStyle={appStyles.backendButton}
							containerStyle={{marginTop: 32, flex: 0}}
							title={'Abbrechen'}
							titleStyle={{color: 'rgba(0, 0, 0, 0.38)'}}
							onPress={() => Alert.alert('🤔', 'https://10.101.144.20')}
						/>
					</View>
			</View>
		);
	}
}
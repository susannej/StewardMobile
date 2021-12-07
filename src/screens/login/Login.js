import { blockStatement } from '@babel/types';
import React from 'react';
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('./img/bg.jpeg');
const LUCKE_LOGO = require('./img/cropped-logo-lucke-white.png');

const StewardMobileApp = () => {

	return (
		<View style={styles.container} >
			<ImageBackground source={BG_IMAGE} style={styles.bgImage}>
					<View style={StyleSheet.logoContainer}>
						<Image source={LUCKE_LOGO} style={styles.luckeLogo} />
					</View>
					<View style={styles.titleContainer}> 
						<View>
							<Text style={styles.titleText}>Steward Mobile</Text> 
						</View>
					</View>
					<View style={styles.formContainer} >
						<Input 
							//value={username}
							autoFocus={true}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							returnKeyType="next"
							inputStyle={{ marginLeft: 10, color: 'grey' }}
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
							inputStyle={{ marginLeft: 10, color: 'grey' }}
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
              				buttonStyle={styles.loginButton}
              				containerStyle={{ marginTop: 32, flex: 0 }}
              				activeOpacity={0.8}
              				title='Anmelden'
              				//onPress={isLoginPage ? login : signUp}
              				titleStyle={styles.loginTextButton}
              				//loading={isLoading}
              				//disabled={isLoading}
            			/>
            			<Button
              				buttonStyle={styles.backendButton}
              				containerStyle={{ marginTop: 32, flex: 0 }}
              				title={'Konfiguration ...'}
              				titleStyle={{ color: 'rgba(0, 0, 0, 0.38)' }}
              				onPress={() => Alert.alert('🤔', 'https://10.101.144.20')}
            			/>
          			</View>
			</ImageBackground>
		</View>
	);
}
export default StewardMobileApp;

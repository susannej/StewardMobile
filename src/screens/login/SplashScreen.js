import { blockStatement } from '@babel/types';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import loginStyles from './LoginStyles';

import storage from '../../db/Storage';

const BG_IMAGE = require('../../../img/bg.jpeg');
const LUCKE_LOGO = require('../../../img/cropped-logo-lucke-white.png');

const SplashScreen = ({navigation}) => {
	const [animating, setAnimating] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setAnimating(false);
			const value = storage.contains('user_id');
			navigation.replace(value == false ? 'Auth' : 'DrawerNavigationRoutes');
		}, 2000);
	}, []);

//export default class SplashScreen extends React.Component {

		return (
			<View style={loginStyles.container}>
				<ImageBackground source={BG_IMAGE} style={loginStyles.bgImage}>
					<View style={StyleSheet.logoContainer}>
						<Image source={LUCKE_LOGO} style={loginStyles.luckeLogo}/>
					</View>
					<ActivityIndicator
						animating={animating}
						color={'#FFFFFF'}
						size={'large'}
						style={loginStyles.activityIndicator}
					/>
					<View style={loginStyles.titleContainer}>
						<View>
							<Text style={loginStyles.titleText}>Steward Mobile</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
};
export default SplashScreen;
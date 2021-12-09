import { blockStatement } from '@babel/types';
import React from 'react';
import {
	Alert,
	Dimensions,
	Image,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import appStyles from './AppStyles';
import {LineChart, ProgressChart} from "react-native-chart-kit";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
//const BG_IMAGE = require('./img/bg.jpeg');
//const LUCKE_LOGO = require('./img/cropped-logo-lucke-white.png');

export default class AppDashboardScreen2 extends React.Component {

	render() {
		return (
			<SafeAreaView style={appStyles.safeArea}>

			<ScrollView style={appStyles.scrollView}>
				<View style={{marginTop: 30}}>
					<Text>Rechnungserträge</Text>
					<LineChart
						data={{
							labels: ['January', 'February', 'March', 'April', 'May', 'June'],
							datasets: [{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100
								]
							}]
						}}
						width={Dimensions.get('window').width -40} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: '#1cc910',
							backgroundGradientFrom: '#183086',
							backgroundGradientTo: '#0d1a49',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 255) => '#ECEFF1',
						}}
						yAxisLabel={'$'}
						style={{marginLeft: 5, marginRight: 5, borderRadius: 7, marginTop: 10}}
					/>
				</View>
				<View style={{marginTop: 30}}>
					<Text>Progress Chart</Text>
					<ProgressChart
						data={[0.4, 0.6, 0.8]}
						width={Dimensions.get('window').width - 40}
						height={220}
						chartConfig={{
							backgroundColor: '#1cc910',
							backgroundGradientFrom: '#183086',
							backgroundGradientTo: '#0d1a49',
							decimalPlaces: 2,
							color: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						style={{
							marginVertical: 8,
							borderRadius: 16,
						}}
					/>
				</View>
				<View style={{marginTop: 30}}>
					<Text>Progress Chart</Text>
					<ProgressChart
						data={[0.4, 0.6, 0.8]}
						width={Dimensions.get('window').width - 40}
						height={220}
						chartConfig={{
							backgroundColor: '#1cc910',
							backgroundGradientFrom: '#1cc910',
							backgroundGradientTo: '#119408',
							decimalPlaces: 2,
							color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						style={{
							marginVertical: 8,
							borderRadius: 16,
						}}
					/>
				</View>
			</ScrollView>
			</SafeAreaView>
		);
	}
}
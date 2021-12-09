import { blockStatement } from '@babel/types';
import React from 'react';
import { Alert, Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph
} from 'react-native-chart-kit';
import { Button, Input } from 'react-native-elements';
import appStyles from './AppStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
//const BG_IMAGE = require('./img/bg.jpeg');
//const LUCKE_LOGO = require('./img/cropped-logo-lucke-white.png');

export default class AppDashboardScreen extends React.Component {

	render() {
		return (
			<SafeAreaView style={appStyles.safeArea}>

				<ScrollView style={appStyles.scrollView}>
					<View style={{marginTop: 30}}>
						<Text>
							Lieferanten Vertrags-Volumen
						</Text>
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
								backgroundColor: '#e26a00',
								backgroundGradientFrom: '#183086',
								backgroundGradientTo: '#0d1a49',
								color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								style: {
									borderRadius: 16
								}
							}}
							bezier
							style={{
								marginVertical: 8,
								borderRadius: 16
							}}
						/>
					</View>
					<View style={{marginTop: 30}}>
						<Text>
							Kunden Vertrags-Volumen
						</Text>
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
								backgroundColor: '#002de2',
								backgroundGradientFrom: '#183086',
								backgroundGradientTo: '#0d1a49',
								color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

								style: {
									borderRadius: 16
								}
							}}
							bezier
							style={{
								marginVertical: 8,
								borderRadius: 16
							}}
						/>
					</View>
					<View style={{marginTop: 30}}>
						<Text>
							Ausgangsrechnungen
						</Text>
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
								backgroundColor: '#002de2',
								backgroundGradientFrom: '#183086',
								backgroundGradientTo: '#0d1a49',
								color: (opacity = 1) => `rgba(255, 100, 146, ${opacity})`,

								style: {
									borderRadius: 16
								}
							}}
							bezier
							style={{
								marginVertical: 8,
								borderRadius: 16
							}}
						/>
					</View>
					<View style={{marginTop: 30}}>
						<Text>
							Lieferanten Vertrags-Volumen
						</Text>
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
								backgroundColor: '#e26a00',
								backgroundGradientFrom: '#fb8c00',
								backgroundGradientTo: '#ffa726',
								color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								style: {
									borderRadius: 16
								}
							}}
							bezier
							style={{
								marginVertical: 8,
								borderRadius: 16
							}}
						/>
					</View>
					<View style={{marginTop: 30}}>
						<Text>
							Kunden Vertrags-Volumen
						</Text>
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
								backgroundColor: '#002de2',
								backgroundGradientFrom: 'rgba(0,45,226,0.54)',
								backgroundGradientTo: 'rgba(0,45,226,0.42)',
								color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

								style: {
									borderRadius: 16
								}
							}}
							bezier
							style={{
								marginVertical: 8,
								borderRadius: 16
							}}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
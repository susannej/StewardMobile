// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import AppDashboardScreen from './app/AppDashboardScreen';
import AppDashboardScreen2 from './app/AppDashboardScreen2';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="AppDashboardScreen">
            <Stack.Screen
                name="AppDashboardScreen"
                component={AppDashboardScreen}
                options={{
                    title: 'Dashboard', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const settingScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="AppDashboardScreen2"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="AppDashboardScreen2"
                component={AppDashboardScreen2}
                options={{
                    title: 'Dashboard2', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            //drawerContentOptions={{
            bla={{
                //activeTintColor: '#cee1f2',
                activeTintColor: '#3e951c',
                color: '#cee1f2',
                itemStyle: {marginVertical: 5, color: 'white'},
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            screenOptions={{
                headerShown: false,
                drawerTintColor: 'green',
                color: 'green',
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#1e3487',
                drawerInactiveTintColor: 'black'
            }}
            drawerContent={CustomSidebarMenu}>
            <Drawer.Screen
                name="homeScreenStack"
                options={{drawerLabel: 'Dashboard'}}
                component={homeScreenStack}
            />
            <Drawer.Screen
                name="settingScreenStack"
                options={{drawerLabel: 'Dashboard 2'}}
                component={settingScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;
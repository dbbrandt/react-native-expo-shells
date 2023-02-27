/*
yarn add @react-navigation/native
To support expo : Note if you just install wihtout the version
expo install react-native-safe-area-context react-native-screens

 */
import {StatusBar} from 'expo-status-bar';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from 'react-redux';
import { store } from "./store/store";

import {StyleSheet, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from "./constants/colors";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();
//To use a background you need to make the default theme transparent
const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    }
}

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style="light"/>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMode="cover"
                             style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}
            >
            <NavigationContainer theme={navTheme}>
                <BottomTab.Navigator screenOptions={{
                    headerStyle: {backgroundColor: Colors.tabsMain},
                    headerTintColor: Colors.tabsText,
                    tabBarActiveTintColor: Colors.tabsMain,
                }}>
                    <BottomTab.Screen name="Welcome" component={WelcomeScreen} options={{
                        tabBarIcon: ({color, size}) =>
                            <Ionicons name="home" color={color} size={size}/>
                    }}/>
                    <BottomTab.Screen name="User" component={UserScreen} options={{
                        tabBarIcon: ({color, size}) =>
                            <Ionicons name="person" color={color} size={size}/>
                    }}/>
                </BottomTab.Navigator>
            </NavigationContainer>
            </ImageBackground>
        </Provider>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

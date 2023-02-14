/*
yarn add @react-navigation/native
To support expo : Note if you just install wihtout the version
expo install react-native-safe-area-context react-native-screens

 */
import {StatusBar} from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <BottomTab.Navigator screenOptions={{
                    headerStyle: {backgroundColor: '#48b4e7'},
                    headerTintColor: 'white',
                    tabBarActiveTintColor: '#48b4e7',
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
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

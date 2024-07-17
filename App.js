import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';

import Start from "./screens/Start";
import SplashScreen from "./screens/SplashScreen";
import Register from "./screens/Register";
import RegisterBirthday from "./screens/RegisterBirthday";
import { SessionDataProvider } from './component/SessionContext';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Main App component
export default function App() {
    return (
        // Provide Redux store to the app
        <Provider store={store}>
            <SessionDataProvider>
                <NavigationContainer>
                    <Stack.Navigator 
                        initialRouteName="SplashScreen" 
                        screenOptions={{
                            headerStatusBarHeight: StatusBar.currentHeight, 
                            statusBarHidden: false, 
                            statusBarStyle: 'light-content',
                            statusBarColor: 'rgba(0, 0, 0, 1)', 
                            animation: 'none',
                            headerTransparent: true, 
                        }}
                    >
                        <Stack.Screen
                            name="SplashScreen"
                            component={SplashScreen}
                            options={{ headerShown: false, statusBarHidden: true }}
                        /> 
                        <Stack.Screen
                            name="Start"
                            component={Start}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen 
                            name="Register" 
                            component={Register}  
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="RegisterBirthday" 
                            component={RegisterBirthday}  
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                </NavigationContainer>    
            </SessionDataProvider>
        </Provider>
    );
}

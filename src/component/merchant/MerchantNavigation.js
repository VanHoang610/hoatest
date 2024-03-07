import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from '../merchant/screens/Login'
import Register from './screens/Register';
import OTP from './screens/OTP';
import Partner from './screens/Partner';
const StackNaviScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login">
            <Stack.Screen
                name='Login' component={Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Register' component={Register}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='OTP' component={OTP}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='Partner' component={Partner}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default StackNaviScreen
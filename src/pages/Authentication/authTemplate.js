import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';

export default function AuthTemplate() {
    const Stack = createNativeStackNavigator()
    return (
        <SafeAreaProvider>
            <Stack.Navigator>
                <Stack.Screen name={"login"} component={Login} options={{headerShown:false}}/>
                <Stack.Screen name={"register"} component={Register} options={{headerShown:false}}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}

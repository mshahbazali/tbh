import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start, Login, GenderSelector, Upload } from '../../../Screen';
const Stack = createStackNavigator();

export default function index() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="GenderSelector" component={GenderSelector} />
            <Stack.Screen options={{ headerShown: false }} name="Upload" component={Upload} />
        </Stack.Navigator>
    );
}
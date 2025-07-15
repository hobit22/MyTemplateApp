import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import GenderScreen from '../screens/GenderScreen';
import BirthScreen from '../screens/BirthScreen';
import WeightScreen from '../screens/WeightScreen';
import ActivityScreen from '../screens/ActivityScreen';

export type AuthStackParamList = {
  Login: undefined;
  Gender: undefined;
  Birth: { gender: 'male' | 'female' | 'none' };
  Weight: { gender: 'male' | 'female' | 'none'; birth: string };
  Activity: { gender: 'male' | 'female' | 'none'; birth: string; weight: string };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Birth" component={BirthScreen} />
      <Stack.Screen name="Weight" component={WeightScreen} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
    </Stack.Navigator>
  );
}
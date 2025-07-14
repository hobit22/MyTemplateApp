import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { useAuthStore } from './src/store/authStore';

export default function App() {
  const { token, init } = useAuthStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init().finally(() => setIsReady(true));
  }, [init]);

  if (!isReady) return null; // 로딩 화면 대체 가능

  return (
    <NavigationContainer>
      {token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
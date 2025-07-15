import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { useAuthStore } from './src/store/authStore';

export default function App() {
  const { token, userInfo, init, clearUserInfo } = useAuthStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init().finally(() => {
      setIsReady(true);
      clearUserInfo();
    });
  }, [init, clearUserInfo]);

  if (!isReady) return null; // 로딩 화면 대체 가능

  return (
    <NavigationContainer>
      {!token ? <AuthNavigator /> : !userInfo ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
}
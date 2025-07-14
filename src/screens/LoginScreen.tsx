import React from 'react';
import { View, StyleSheet } from 'react-native';
import KakaoLoginButton from '../components/KakaoLoginButton';

export default function LoginScreen() {
  
  return (
    <View style={styles.container}>
      <KakaoLoginButton lang="ko" size="medium" width="wide" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingBottom: 100
  }
});
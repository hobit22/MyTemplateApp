import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import KakaoLoginButton from '../components/KakaoLoginButton';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash/background.png')}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>워터리</Text>
        <Text style={styles.subtitle}>오늘의 수분 기록</Text>
        <KakaoLoginButton lang="ko" size="medium" width="wide" navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: width,
    height: height,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#146DB6',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8A949E',
    marginBottom: 32,
  },
});
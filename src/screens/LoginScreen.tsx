import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { login, logout, getProfile as getKakaoProfile, shippingAddresses as getKakaoShippingAddresses, serviceTerms as getKakaoServiceTerms, unlink } from '@react-native-seoul/kakao-login';
import { useAuthStore } from '../store/authStore';

export default function LoginScreen() {
  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      useAuthStore.getState().setToken(token.accessToken);
    } catch (err) {
      console.error('login err', err);
    }
  };
  
  return (
    
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text style={styles.text}>
          카카오 로그인
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: "flex-end",
      alignItems: 'center',
      paddingBottom: 100
    },
    button: {
      backgroundColor: '#FEE500',
      borderRadius: 40,
      borderWidth: 1,
      width: 250,
      height: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 10
    },
    text: {
      textAlign: "center"
    }
  });
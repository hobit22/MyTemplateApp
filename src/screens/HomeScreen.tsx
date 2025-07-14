import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthStore } from '../store/authStore';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
  const { clearToken } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈 화면</Text>
      <CustomButton title="로그아웃" onPress={() => clearToken()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { login } from '@react-native-seoul/kakao-login'; // 예시용
import { useAuthStore } from '../store/authStore';

interface Props {
  lang: 'ko' | 'en';
  size: 'medium' | 'large';
  width: 'wide' | 'narrow';
}

const imageMap = {
  ko: {
    medium: {
      narrow: require('../../assets/ko/kakao_login_medium_narrow.png'),
      wide: require('../../assets/ko/kakao_login_medium_wide.png'),
    },
    large: {
      narrow: require('../../assets/ko/kakao_login_large_narrow.png'),
      wide: require('../../assets/ko/kakao_login_large_wide.png'),
    },
  },
  en: {
    medium: {
      narrow: require('../../assets/en/kakao_login_medium_narrow.png'),
      wide: require('../../assets/en/kakao_login_medium_wide.png'),
    },
    large: {
      narrow: require('../../assets/en/kakao_login_large_narrow.png'),
      wide: require('../../assets/en/kakao_login_large_wide.png'),
    },
  },
};

const KakaoLoginButton = ({ lang = 'ko', size = 'medium', width = 'narrow' }: Props) => {

  const handleLogin = async (): Promise<void> => {
    try {
      const token = await login();
      useAuthStore.getState().setToken(token.accessToken);
    } catch (err) {
      console.error('login err', err);
    }
  };

  return (
    <TouchableOpacity onPress={handleLogin}>
      <Image
        source={imageMap[lang][size][width]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default KakaoLoginButton;
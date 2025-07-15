import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserInfo {
  gender: 'male' | 'female' | 'none';
  birth: string;
  weight: string;
  activity: string;
}

interface AuthState {
  token: string | null;
  userInfo: UserInfo | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  setUserInfo: (info: UserInfo) => void;
  clearUserInfo: () => void;
  init: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  token: null,
  userInfo: null,

  setToken: token => {
    AsyncStorage.setItem('kakaoToken', token);
    set({ token });
  },

  clearToken: () => {
    AsyncStorage.removeItem('kakaoToken');
    set({ token: null });
  },

  setUserInfo: info => {
    AsyncStorage.setItem('userInfo', JSON.stringify(info));
    set({ userInfo: info });
  },

  clearUserInfo: () => {
    AsyncStorage.removeItem('userInfo');
    set({ userInfo: null });
  },

  init: async () => {
    const stored = await AsyncStorage.getItem('kakaoToken');
    if (stored) set({ token: stored });
    const userInfoStr = await AsyncStorage.getItem('userInfo');
    if (userInfoStr) set({ userInfo: JSON.parse(userInfoStr) });
  },
}));

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  init: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  token: null,

  setToken: token => {
    AsyncStorage.setItem('kakaoToken', token);
    set({ token });
  },

  clearToken: () => {
    AsyncStorage.removeItem('kakaoToken');
    set({ token: null });
  },

  init: async () => {
    const stored = await AsyncStorage.getItem('kakaoToken');
    if (stored) set({ token: stored });
  },
}));

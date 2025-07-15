import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useAuthStore } from '../store/authStore';
import ProgressBar from '../components/ProgressBar';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // 실제 환경에서 설치 후 주석 해제

const ACTIVITY_OPTIONS = [
  {
    key: 'none',
    title: '거의 운동하지 않아요',
    subtitle: '주 0회',
  },
  {
    key: 'light',
    title: '가볍게 움직이는 편이에요',
    subtitle: '주 1–2회 걷기 등',
  },
  {
    key: 'moderate',
    title: '일주일에 몇 번은 운동해요',
    subtitle: '주 3–4회 유산소/근력 등',
  },
  {
    key: 'heavy',
    title: '매일 운동하거나 활동량이 많아요',
    subtitle: '주 5회 이상 고강도 운동 등',
  },
];

export default function ActivityScreen({ navigation, route }: any) {
  const [selected, setSelected] = useState<string | null>(null);
  const { gender, birth, weight } = route.params;
  const setUserInfo = useAuthStore(state => state.setUserInfo);

  const handleDone = () => {
    if (!selected) return;
    setUserInfo({ gender, birth, weight, activity: selected });
    // App.tsx에서 userInfo가 생기면 자동으로 Home(AppNavigator)로 이동
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 상단 네비게이션 */}
      <View style={styles.topNaviWrap}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{fontSize: 24, color: '#8A949E'}}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ProgressBar step={4} />
      {/* 타이틀/서브타이틀 */}
      <Text style={styles.title}>{'하루 평균 활동량을\n선택해 주세요.'}</Text>
      <Text style={styles.subtitle}>정확한 목표 수분량을 알기 위해 필요해요.</Text>
      {/* 활동량 선택 버튼들 */}
      <View style={styles.optionsWrap}>
        {ACTIVITY_OPTIONS.map(opt => (
          <TouchableOpacity
            key={opt.key}
            style={[styles.optionBtn, selected === opt.key && styles.optionBtnActive]}
            onPress={() => setSelected(opt.key)}
            activeOpacity={0.8}
          >
            <Text style={[styles.optionTitle, selected === opt.key && styles.optionTitleActive]}>{opt.title}</Text>
            <Text style={styles.optionSubtitle}>{opt.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* 하단 버튼 */}
      <View style={styles.bottomBtnWrap}>
      <TouchableOpacity
        style={[styles.nextButton, !selected && styles.disabled]}
        onPress={handleDone}
        disabled={!selected}
        activeOpacity={0.8}
      >
        <Text style={styles.nextText}>시작하기</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topNaviWrap: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    paddingLeft: 16,
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.5,
    color: '#1E2124',
    marginLeft: 32,
    marginTop: 38,
    marginBottom: 8,
    textAlign: 'left',
  },
  subtitle: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#58616A',
    marginLeft: 32,
    marginBottom: 24,
    textAlign: 'left',
  },
  bottomBtnWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  optionsWrap: {
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 24,
    gap: 16,
  },
  optionBtn: {
    backgroundColor: '#F6F9FE',
    borderColor: '#B2E0EE',
    borderWidth: 1,
    borderRadius: 12,
    height: 84,
    marginBottom: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  optionBtnActive: {
    borderColor: '#1C8EDA',
    backgroundColor: '#E6F3FF',
  },
  optionTitle: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: 15,
    color: '#187DC7',
    marginBottom: 4,
  },
  optionTitleActive: {
    color: '#1C8EDA',
  },
  optionSubtitle: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: 14,
    color: '#6D7882',
  },
  
  nextButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#1C8EDA',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
    shadowColor: '#187DC7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
    opacity: 1,
  },
  nextText: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    letterSpacing: 0.57,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
}); 
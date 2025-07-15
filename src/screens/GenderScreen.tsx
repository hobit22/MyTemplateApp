import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ProgressBar from '../components/ProgressBar';

export default function GenderScreen({ navigation }: any) {
  const [gender, setGender] = useState<'male' | 'female' | 'none' | ''>('');

  const handleNext = () => {
    if (!gender) return;
    navigation.navigate('Birth', { gender });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 상단 네비게이션 */}
      <View style={styles.topNaviWrap}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{fontSize: 24, color: '#8A949E'}}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ProgressBar step={1} />
      {/* 타이틀/서브타이틀 */}
      <Text style={styles.title}>{'성별을\n선택해 주세요.'}</Text>
      <Text style={styles.subtitle}>정확한 목표 수분량을 알기 위해 필요해요.</Text>
      {/* 성별 버튼 */}
      <View style={styles.genderCol}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' && styles.genderSelected]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>남성</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' && styles.genderSelected]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>여성</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'none' && styles.genderSelected]}
          onPress={() => setGender('none')}
        >
          <Text style={styles.genderText}>선택하지 않음</Text>
        </TouchableOpacity>
      </View>
      {/* 하단 버튼 */}
      <View style={styles.bottomBtnWrap}>
        <TouchableOpacity style={[styles.nextButton, !gender && styles.disabled]} onPress={handleNext} disabled={!gender} activeOpacity={0.8}>
          <Text style={styles.nextText}>다음</Text>
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
  bottomBtnWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarWrap: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 40,
    height: 4,
  },
  progressBar: {
    flex: 1,
    borderRadius: 7,
    height: 4,
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
  },
  subtitle: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#58616A',
    marginLeft: 32,
    marginBottom: 60,
  },
  genderCol: {
    marginHorizontal: 24,
    gap: 16,
    marginBottom: 40,
  },
  genderButton: {
    backgroundColor: '#F6F9FE',
    borderColor: '#B2E0EE',
    borderWidth: 1,
    borderRadius: 12,
    height: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  genderSelected: {
    backgroundColor: '#B2E0EE',
    borderColor: '#187DC7',
  },
  genderText: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: '#187DC7',
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
    backgroundColor: '#B2E0EE',
  },
}); 
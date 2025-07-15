import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import ProgressBar from '../components/ProgressBar';

export default function BirthScreen({ navigation, route }: any) {
  const [birth, setBirth] = useState((new Date().getFullYear()).toString());
  const { gender } = route.params;

  // 1940~2024년 예시
  const years = Array.from({ length: 2024 - 1940 + 1 }, (_, i) => (1940 + i).toString());

  const handleNext = () => {
    if (!birth) return;
    navigation.navigate('Weight', { gender, birth });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 상단 네비게이션 */}
      <View style={styles.topNaviWrap}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{fontSize: 24, color: '#8A949E'}}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ProgressBar step={2} />
      {/* 타이틀/서브타이틀 */}
      <Text style={styles.title}>{'출생연도를\n선택해 주세요.'}</Text>
      <Text style={styles.subtitle}>정확한 목표 수분량을 알기 위해 필요해요.</Text>
      <View style={styles.pickerWrap}>
        <Picker
          style={styles.picker}
          selectedValue={birth}
          pickerData={years}
          onValueChange={setBirth}
          textColor="#187DC7"
          textSize={24}
        />
      </View>
      {/* 하단 버튼 */}
      <View style={styles.bottomBtnWrap}>
        <TouchableOpacity style={[styles.nextButton, !birth && styles.disabled]} onPress={handleNext} disabled={!birth} activeOpacity={0.8}>
          <Text style={styles.nextText}>다음 단계</Text>
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
    marginBottom: 24,
  },
  pickerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 40,
    height: 400
  },
  picker: {
    width: 200,
    height: 400,
    backgroundColor: 'white',
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
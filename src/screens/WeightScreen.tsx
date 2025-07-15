import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import ProgressBar from '../components/ProgressBar';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // 실제 환경에서 설치 후 주석 해제

export default function WeightScreen({ navigation, route }: any) {
  const { gender, birth } = route.params;
  const weights = Array.from({ length: 200 - 30 + 1 }, (_, i) => (30 + i).toString());
  const [weight, setWeight] = useState('60');

  const handleNext = () => {
    if (!weight) return;
    navigation.navigate('Activity', { gender, birth, weight });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 상단 네비게이션 */}
      <View style={styles.topNaviWrap}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          {/* <Icon name="arrow-back-rounded" size={24} color="#8A949E" /> */}
          <Text style={{fontSize: 24, color: '#8A949E'}}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      {/* 진행바 */}
      <ProgressBar step={3} />
      {/* 타이틀/서브타이틀 */}
      <Text style={styles.title}>{'체중을\n선택해주세요.'}</Text>
      <Text style={styles.subtitle}>정확한 목표 수분량을 알기 위해 필요해요.</Text>
      {/* 휠 피커 */}
      <View style={styles.pickerWrap}>
        <Picker
          style={styles.picker}
          selectedValue={weight}
          pickerData={weights}
          onValueChange={setWeight}
          textColor="#187DC7"
          textSize={24}
        />
        <Text style={styles.unit}>kg</Text>
      </View>
      {/* 하단 버튼 */}
      <View style={styles.bottomBtnWrap}>
        <TouchableOpacity style={[styles.nextButton, !weight && styles.disabled]} onPress={handleNext} disabled={!weight} activeOpacity={0.8}>
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
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  progressBarWrap: {
    width: 375,
    height: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  progressBarBg: {
    flex: 1,
    height: 4,
    backgroundColor: '#D4EFF7',
    borderRadius: 7,
    marginHorizontal: 20,
  },
  progressBarActive: {
    position: 'absolute',
    left: 20,
    width: 335,
    height: 4,
    backgroundColor: '#1F9BE7',
    borderRadius: 7,
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
  imageWrap: {
    width: 149,
    height: 442,
    alignSelf: 'center',
    marginBottom: 8,
  },
  imagePlaceholder: {
    width: 149,
    height: 442,
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
  },
  pickerWrap: {
    flexDirection: 'row',
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
  unit: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: 15,
    color: '#58616A',
    marginLeft: 12,
    alignSelf: 'center',
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
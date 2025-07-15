import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  step: 1 | 2 | 3 | 4;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  return (
    <View style={styles.wrap}>
      {[1, 2, 3, 4].map((idx) => (
        <View
          key={idx}
          style={[styles.bar, { backgroundColor: step === idx ? '#146DB6' : '#D4EFF7' }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 40,
    height: 5,
  },
  bar: {
    flex: 1,
    borderRadius: 7,
    height: 5,
  },
}); 
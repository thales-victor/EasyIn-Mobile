import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';


export function Input({ label, value, ...rest }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest} value={value} />
    </View>
  );
}
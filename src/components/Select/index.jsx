import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export function Select({ label, value, disabled, ...rest }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.7}
        style={[
          styles.input,
          (disabled ? styles.disabled : styles.enabled)]}
        {...rest}
      >
        <Text style={styles.value}>{value}</Text>
      </TouchableOpacity>
      {/* <TextInput style={styles.input} {...rest} value={value} /> */}
    </View>
  );
}
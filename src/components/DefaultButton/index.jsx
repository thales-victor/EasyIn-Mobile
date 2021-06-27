import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export function DefaultButton({ title, secondary, ...rest }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        (secondary ? styles.secondary : styles.primary)
      ]}
      {...rest}
    >
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}
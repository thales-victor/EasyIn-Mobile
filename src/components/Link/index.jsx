import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export function Link({text, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}
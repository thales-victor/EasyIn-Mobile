import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export function DefaultButton({ title, secondary, warning, ...rest }) {
  
  function getColorStyle(){
    if (warning) {
      return styles.warning;
    }
    if (secondary) {
      return styles.secondary;
    }
    return styles.primary;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        getColorStyle()
      ]}
      {...rest}
    >
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}
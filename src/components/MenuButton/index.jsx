import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export function MenuButton({name, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <MaterialIcons name={name} size={60} color={theme.color.title}/>
    </TouchableOpacity>
  );
}
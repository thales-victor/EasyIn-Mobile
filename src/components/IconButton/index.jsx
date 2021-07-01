import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function IconButton({ name, onPress, disabled }) {

  function handlePress() {
    if (!disabled) {
      onPress();
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <Feather
        name={name}
        color={
          disabled
            ? theme.color.disabled
            : theme.color.primary
        }
        size={32}
      />
    </TouchableOpacity>
  );
}
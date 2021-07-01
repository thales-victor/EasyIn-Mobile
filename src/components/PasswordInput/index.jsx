import React, { useState } from 'react';
import { Input } from '../Input';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function PasswordInput({ ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleToggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <View
      style={styles.container}
    >
      <Input secureTextEntry={!showPassword} {...rest} />
      <TouchableOpacity
        style={styles.image}
        onPress={handleToggleShowPassword}
      >
        <Feather
          name={showPassword ? 'eye' : 'eye-off'}
          size={18}
          color={theme.color.primary}
        />

      </TouchableOpacity>
    </View>
  );
}
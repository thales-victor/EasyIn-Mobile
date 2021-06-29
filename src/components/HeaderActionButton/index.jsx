import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function HeaderActionButton({ icon, ...rest }) {
  return (
    <BorderlessButton {...rest}>
      <Feather
        name={icon}
        size={24}
        color={theme.color.title}
      />
    </BorderlessButton>
  );
}
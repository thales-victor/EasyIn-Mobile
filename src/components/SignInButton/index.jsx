import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './styles';


export function SignInButton({title, ...rest}) {
  return (
    <RectButton style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
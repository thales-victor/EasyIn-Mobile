import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function CredentialItem({ item, onPress }) {

  function handlePress() {
    onPress(item);
  }

  return (
    <RectButton style={styles.container} onPress={handlePress}>
      <View style={styles.platform}>
        <Text style={styles.platformInfo}>{item.email}</Text>
        <Text style={styles.platformInfo}>{item.platform}</Text>
      </View>
      <Feather style={styles.icon} name="chevron-right" color={theme.color.text} size={24} />
    </RectButton>
  );
}
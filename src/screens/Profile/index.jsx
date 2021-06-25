import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';

export function Profile() {
  return (
    <View style={styles.container}>
      <Header title="Perfil" />
    </View>
  );
}
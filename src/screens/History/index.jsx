import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';

export function History() {
  return (
    <View style={styles.container}>
      <Header title="Histórico de logins" />
    </View>
  );
}
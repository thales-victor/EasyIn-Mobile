import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


export function CredentialDetail() {
  return (
    <View style={styles.container}>
      <Header title="Criar senha" />
      <KeyboardAvoidingView>
        <ScrollView>
          <Input label="Plataforma" />
          <Input label="Usuário/E-mail" />
          <Input label="Senha" />
          <Input label="Confirmar senha" />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
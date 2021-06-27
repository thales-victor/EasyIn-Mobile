import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';


export function CredentialDetail({ route }) {
  const { id } = route.params;

  const [platform, setPlatform] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Header title={`${id ? 'Criar' : 'Editar'} senha`} />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Input label="Plataforma" value={platform} onChangeText={setPlatform} />
            <Input label="Usuário/E-mail" value={username} onChangeText={setUsername} />
            <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
            <PasswordInput label="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} />

            <View style={styles.footer}>
              <DefaultButton title="Salvar" />
              <DefaultButton title="Cancelar" secondary />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
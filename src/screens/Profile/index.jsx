import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';


export function Profile() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changePassword, setChangePassword] = useState(false);


  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  function handleGoBack() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Input label="Nome" value={name} onChangeText={setName} />
            <Input label="E-mail" value={email} onChangeText={setEmail} />
            {
              changePassword && (
                <>
                  <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
                  <PasswordInput label="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} />
                </>
              )
            }

            <View style={styles.footer}>
              {
                !changePassword && (
                  <DefaultButton title="Alterar senha" onPress={setChangePassword} />
                )

              }
              <DefaultButton title="Salvar" />
              <DefaultButton title="Cancelar" secondary onPress={handleGoBack} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
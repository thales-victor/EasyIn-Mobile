import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

import LogoImg from '../../assets/Logo.png';
import { Input } from '../../components/Input';
import { SignInButton } from '../../components/SignInButton';
import { Header } from '../../components/Header';

export function SignUp() {
  const navigation = useNavigation();

  function handleSignUp() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Header title="Cadastro" />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.form}>
            <Input label="Nome" />
            <Input label="Email" />
            <Input label="Senha" />
            <Input label="Confirmar senha" />
            <View style={styles.footer} >
              <SignInButton title="Cadastrar" onPress={handleSignUp} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
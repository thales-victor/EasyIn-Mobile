import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

import LogoImg from '../../assets/Logo.png';
import { Input } from '../../components/Input';
import { SignInButton } from '../../components/SignInButton';
import { Link } from '../../components/Link';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>

        <ScrollView >
          <Image source={LogoImg} />

          <View style={styles.form}>
            <Input label="Usuário / E-mail" />
            <Input label="Senha" />

            <SignInButton title="Entrar" onPress={handleSignIn} />

            <Link style={styles.footer} onPress={handleSignUp} />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
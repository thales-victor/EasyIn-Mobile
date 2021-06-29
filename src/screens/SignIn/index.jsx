import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from './styles';

import LogoImg from '../../assets/Logo.png';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';
import { Link } from '../../components/Link';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
import { Login } from '../../services/api/Authentication';

export function SignIn() {
  const [username, setUsername] = useState('admin@admin');
  const [password, setPassword] = useState('admin');

  const navigation = useNavigation();
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    
    const result = await Login(username, password);
    if (result){
      signIn(result);
    }
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
            <Input label="Usuário / E-mail" value={username} onChangeText={setUsername} />
            <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
            {
              loading ? (
                <ActivityIndicator color={theme.color.title} />
              ) : (
                <DefaultButton title="Entrar" onPress={handleSignIn} />
              )
            }

            <Link style={styles.footer} onPress={handleSignUp} />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const { signIn } = useAuth();


  async function handleSignIn() {
    setIsLoading(true);
    const result = await Login(username, password);
    if (result){
      signIn(result);
    }
    setIsLoading(false);
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
              isLoading ? (
                <ActivityIndicator color={theme.color.primary} />
              ) : (
                <DefaultButton title="Entrar" onPress={handleSignIn} />
              )
            }

            <Link text="Cadastre-se" style={styles.footer} onPress={handleSignUp} />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
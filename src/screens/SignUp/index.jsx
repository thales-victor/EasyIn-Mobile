import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';
import { Header } from '../../components/Header';
import { Register } from '../../services/api/Authentication';
import toast from '../../components/Alert';
import { theme } from '../../global/styles/theme';

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigation = useNavigation();
  
  async function handleSignUp() {
    setIsLoading(true);
    var result = await Register(name, email, password, confirmPassword);
    setIsLoading(false);
    if (result) {
      toast.success('Cadastro realizado com sucesso!');
      navigation.navigate('SignIn');
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Cadastro" />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.form}>
            <Input label="Nome" value={name} onChangeText={setName} />
            <Input label="Email" value={email} onChangeText={setEmail} />
            <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
            <PasswordInput label="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} />
            <View style={styles.footer} >
            {
              isLoading ? (
                <ActivityIndicator color={theme.color.primary} />
              ) : (
                <DefaultButton title="Cadastrar" onPress={handleSignUp} />
              )
            }
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
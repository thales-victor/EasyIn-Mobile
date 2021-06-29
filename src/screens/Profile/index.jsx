import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';
import { GetUserInfo, UpdateUser } from '../../services/api/UserApi';
import { HeaderActionButton } from '../../components/HeaderActionButton';
import { useAuth } from '../../hooks/auth';
import toast from '../../components/Alert';


export function Profile() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const navigation = useNavigation();
  const { logout } = useAuth();

  useEffect(() => {
    _getUserInfo();
  }, []);

  async function _getUserInfo() {
    const result = await GetUserInfo();
    if (result) {
      setUsername(result.username);
      setEmail(result.email);
    }
  }

  async function saveChanges() {
    const result = await UpdateUser(username, email, oldPassword, newPassword, confirmPassword);
    if (result) {
      toast.success('Perfil atualizado')
      setIsChangingPassword(false);
      setUsername(result.username);
      setEmail(result.email);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  }

  function handleGoBack() {
    navigation.navigate('Home');
  }

  function handleLogoutPress() {
    logout();
  }

  return (
    <View style={styles.container}>
      <Header
        title="Perfil"
        action={<HeaderActionButton icon="log-out" onPress={handleLogoutPress} />}

      />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Input label="Nome" value={username} onChangeText={setUsername} />
            <Input label="E-mail" value={email} onChangeText={setEmail} />
            {
              isChangingPassword && (
                <>
                  <PasswordInput label="Senha antiga" value={oldPassword} onChangeText={setOldPassword} />
                  <PasswordInput label="Nova Senha" value={newPassword} onChangeText={setNewPassword} />
                  <PasswordInput label="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} />
                </>
              )
            }

            <View style={styles.footer}>
              {
                !isChangingPassword && (
                  <DefaultButton title="Alterar senha" onPress={setIsChangingPassword} />
                )

              }
              <DefaultButton title="Salvar" onPress={saveChanges} />
              <DefaultButton title="Cancelar" secondary onPress={handleGoBack} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
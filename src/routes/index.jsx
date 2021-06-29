import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';
import { useAuth } from '../hooks/auth';
import LogoImg from '../assets/Logo.png';
import { Image, View, Text } from 'react-native';
import { Background } from '../components/Background';
import { DefaultButton } from '../components/DefaultButton';
import { Link } from '../components/Link';
import { theme } from '../global/styles/theme';

export function Routes() {
  const [attempts, setAttempts] = useState(0);

  const { user, storage, syncStorage, setLoggedUser, logout } = useAuth();

  useEffect(() => {
    init();
  }, []);

  async function init() {
    await syncStorage();
  }

  async function getAuthenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setLoggedUser(storage);
    }
  }

  function handleClearUser() {
    logout();
  }

  if (storage && !user) {
    return (
      <Background>
        <Image source={LogoImg} />
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 50 }}>
          <Text style={{ color: theme.color.title, fontSize: 24 }}>Bem-vindo, {storage.user.username}</Text>
          <DefaultButton title="Login" onPress={getAuthenticate} />
          <Link text="Trocar usuário" onPress={handleClearUser} style={{ color: theme.color.title, fontSize: 24 }} />
        </View>
      </Background>
    )
  }

  return (
    <NavigationContainer>
      {
        user ? (
          <AuthRoutes />
        ) : (
          <PublicRoutes />
        )
      }
    </NavigationContainer>
  );
}
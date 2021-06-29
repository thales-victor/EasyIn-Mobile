import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';
import { useAuth } from '../hooks/auth';
import LogoImg from '../assets/Logo.png';
import { Image, View } from 'react-native';
import { Background } from '../components/Background';
import { DefaultButton } from '../components/DefaultButton';

export function Routes() {
  const { user } = useAuth();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      getAuthenticate();
    } else {
      setIsAuthenticated(false);
      // setIsAuthenticated(true);
    }
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     getAuthenticate();
  //   }
  // }, [user]);

  async function getAuthenticate() {
    if (user) {
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
    }
  }

  if (user && !isAuthenticated) {
    return (
      <Background>
        <Image source={LogoImg} />
        <View style={{paddingHorizontal: 50}}>
          <DefaultButton title="Autenticar" onPress={getAuthenticate} />
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
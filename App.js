import React from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import { ApiBaseComponent } from './src/services/api/ApiBase';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <ApiBaseComponent />
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </AuthProvider>
    </Background>
  );
}
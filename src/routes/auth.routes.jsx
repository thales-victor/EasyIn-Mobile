import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Credentials } from '../screens/Credentials';
import { CredentialDetail } from '../screens/CredentialDetail';
import { Profile } from '../screens/Profile';
import { History } from '../screens/History';
import { QrCodeReader } from '../screens/QrCodeReader';
import { theme } from '../global/styles/theme';
//import { styles } from './styles';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator 
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.color.background
      }
    }}>
      <Screen name="Home" component={Home} />
      <Screen name="Credentials" component={Credentials} />
      <Screen name="CredentialDetail" component={CredentialDetail} />
      <Screen name="Profile" component={Profile} />
      <Screen name="History" component={History} />
      <Screen name="QrCodeReader" component={QrCodeReader} />

    </Navigator>
  );
}
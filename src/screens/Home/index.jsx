import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { MenuButton } from '../../components/MenuButton';
import { styles } from './styles';


export function Home() {
  const navigation = useNavigation();

  function handleGoCredentials() {
    navigation.navigate('Credentials');
  }

  function handleGoProfile() {
    navigation.navigate('Profile');
  }

  function handleGoHistory() {
    navigation.navigate('History');
  }

  function handleGoQrCodeReader() {
    navigation.navigate('QrCodeReader');
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MenuButton name="vpn-key" onPress={handleGoCredentials} />
        <MenuButton name="person" onPress={handleGoProfile} />
      </View>
      <View style={styles.row}>
        <MenuButton name="history" onPress={handleGoHistory} />
        <MenuButton name="crop-free" onPress={handleGoQrCodeReader} />
      </View>
    </View>
  );
}
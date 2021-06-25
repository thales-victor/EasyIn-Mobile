import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { CredentialItem } from '../../components/CredentialItem';
import { TableHeader } from '../../components/TableHeader';
import { ListDivider } from '../../components/ListDivider';

import CredentialsJson from '../../credentials.json';
import { useNavigation } from '@react-navigation/native';

export function Credentials() {
  const navigation = useNavigation();

  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    setCredentials(CredentialsJson);
  }, []);

  function handlePress(item) {
    navigation.navigate('CredentialDetail');
  }

  return (
    <View style={styles.container}>
      <Header title="Senhas" />
      <TableHeader columns={["Usuário/Email", "Plataforma"]} />
      <FlatList
        data={credentials}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CredentialItem item={item} onPress={handlePress} />
        )}
        ItemSeparatorComponent={ListDivider}
      />
    </View>
  );
}
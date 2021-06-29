import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListItem } from '../../components/FlatListItem';
import { TableHeader } from '../../components/TableHeader';
import { ListDivider } from '../../components/ListDivider';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { HeaderActionButton } from '../../components/HeaderActionButton';

import { GetAllCredentials } from '../../services/api/CredentialApi';
import Json from '../../credentials.json';

export function Credentials() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [credentials, setCredentials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCredentials();
  }, [isFocused]);

  async function getCredentials() {
    setIsLoading(true);
    const result = await GetAllCredentials();
    if (result) {
      setCredentials(result);
    }
    setIsLoading(false);
  }

  function handleEditPress(id) {
    navigate(id);
  }

  function handleNewPress() {
    navigate(null)
  }
  function navigate(id) {
    navigation.navigate('CredentialDetail', { id });
  }


  return (
    <View style={styles.container}>
      <Header
        title="Senhas"
        action={<HeaderActionButton icon="plus-circle" onPress={handleNewPress} />}
      />
      <TableHeader columns={["Usuário/Email", "Plataforma"]} />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getCredentials}
          />
        }
        data={credentials}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <FlatListItem id={item.id} columns={[item.username, item.platform]} onPress={handleEditPress} />
        )}
        ItemSeparatorComponent={ListDivider}
      />
    </View>
  );
}
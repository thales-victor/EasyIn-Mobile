import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, RefreshControl } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { HeaderActionButton } from '../../components/HeaderActionButton';
import { theme } from '../../global/styles/theme';
import { TableHeader } from '../../components/TableHeader';
import { FlatListItem } from '../../components/FlatListItem';
import { FlatList } from 'react-native-gesture-handler';
import { ListDivider } from '../../components/ListDivider';
import { getDateTime } from '../../utils/date';
import { ShowMoreDialog } from './ShowMoreDialog';
import Json from '../../history.json';
import { GetLoginHistory } from '../../services/api/HistoryApi';


export function History() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openShowMoreDialog, setOpenShowMoreDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getHistory()
  }, []);

  async function getHistory() {
    setIsLoading(true);
    setHistory([]);
    const result = await GetLoginHistory();
    if (result) {
      setHistory(result);
    }
    setIsLoading(false);
  }

  function handleShowMore(id){
    const item = history.find(h => h.id === id);
    setSelectedItem(item);
    setOpenShowMoreDialog(true);
  }

  function closeShowMore(){
    setOpenShowMoreDialog(false);
    setSelectedItem(null);
  }

  return (
    <View style={styles.container}>
      <Header
        title="Histórico de logins"
        action={
          isLoading
            ? <ActivityIndicator color={theme.color.primary} />
            : <HeaderActionButton icon="refresh-cw" onPress={getHistory} />
        }
      />
      <TableHeader columns={["Plataforma", 'Data/Hora']} />
      <FlatList
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={getHistory}
        />
      }
        data={history}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <FlatListItem id={item.id} columns={[item.platform, getDateTime(item.createdAt)]} onPress={handleShowMore} />
        )}
        ItemSeparatorComponent={ListDivider}
      />
      <ShowMoreDialog isOpen={openShowMoreDialog} closeDialog={closeShowMore} item={selectedItem}/>
    </View>
  );
}
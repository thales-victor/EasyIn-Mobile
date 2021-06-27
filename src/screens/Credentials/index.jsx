import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { TableHeader } from '../../components/TableHeader';
import { TableBody } from '../../components/TableBody';
import { TableCell } from '../../components/TableCell';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import CredentialsJson from '../../credentials.json';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';
import { ConfirmDeleteDialog } from './ConfirmDeleteDialog';

export function Credentials() {
  const [credentials, setCredentials] = useState([]);
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [credentialSelectedId, setCredentialSelectedId] = useState('');
  const navigation = useNavigation();
  const columnWidth = [200, 150, 120];

  useEffect(() => {
    setCredentials(CredentialsJson);
  }, []);

  function handleEditPress(item) {
    navigation.navigate('CredentialDetail', {
      id: item.id
    });
  }

  function handleDeletePress(item) {
    setCredentialSelectedId(item.id);
    setOpenConfirmDeleteDialog(true);
  }
  
  function handleCloseConfirmDeleteDialog() {
    setCredentialSelectedId('');
    setOpenConfirmDeleteDialog(false);
  }

  function handleConfirmDeletePress() {
    let newList = credentials.filter(c => c.id !== credentialSelectedId);
    setCredentials(newList);
    handleCloseConfirmDeleteDialog();
  }

  return (
    <View style={styles.container}>
      <Header title="Senhas" />

      <Table>
        <TableHeader columns={["Usuário/Email", "Plataforma", "Ações"]} columnWidth={columnWidth} />
        <TableBody>
          {
            credentials.map(item => (
              <TableCell
                key={item.id}
                columns={[
                  item.email,
                  item.platform,
                  <View style={styles.actions}>
                    <RectButton style={styles.container} onPress={handleEditPress}>
                      <Feather style={styles.icon} name="edit" color={theme.color.text} size={24} />
                    </RectButton>
                    <RectButton style={styles.container} onPress={() => handleDeletePress(item)}>
                      <Feather style={styles.icon} name="trash" color={theme.color.text} size={24} />
                    </RectButton>
                  </View>
                ]}
                columnWidth={columnWidth}
              />
            ))
          }
        </TableBody>
      </Table>
      <ConfirmDeleteDialog
        isOpen={openConfirmDeleteDialog}
        closeDialog={handleCloseConfirmDeleteDialog}
        confirmDelete={handleConfirmDeletePress}
      />
    </View>
  );
}
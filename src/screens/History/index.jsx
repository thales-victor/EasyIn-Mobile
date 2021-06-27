import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { TableHeader } from '../../components/TableHeader';
import { TableBody } from '../../components/TableBody';
import { TableCell } from '../../components/TableCell';
import HistoryJson from '../../history.json';
import { getDateTime } from '../../utils/date';

export function History() {
  const [history, setHistory] = useState([]);

  const tableHead = ["Plataforma", "Usuário/E-mail", "Data/Hora", "Realizou login"];
  const columnWidth = [150, 200, 200, 150];

  useEffect(() => {
    setHistory(HistoryJson);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Histórico de logins" />

      <Table>
        <TableHeader columns={tableHead} columnWidth={columnWidth} />
        <TableBody>
          {
            history.map(item => (
              <TableCell
                key={item.id}
                columns={[
                  item.platform,
                  item.credential,
                  getDateTime(item.createdAt),
                  item.loggedIn ? 'Sim' : 'Não'
                ]}
                columnWidth={columnWidth}
              />
            ))
          }
        </TableBody>
      </Table>
    </View>
  );
}
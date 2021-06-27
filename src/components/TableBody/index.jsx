import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Table } from 'react-native-table-component';


export function TableBody({ children }) {
  return (
    <ScrollView style={styles.dataWrapper}>
      <Table borderStyle={styles.border}>
        {children}
      </Table>
    </ScrollView>
  );
}
import React from 'react';
import { Table, Row } from 'react-native-table-component';
import { styles } from './styles';


export function TableHeader({ columns, columnWidth }) {
  return (
    <Table borderStyle={styles.border} >
      <Row
        data={columns}
        widthArr={columnWidth}
        style={styles.header}
        textStyle={styles.title}
      />
    </Table>
  );
}
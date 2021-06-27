import React from 'react';
import { styles } from './styles';
import { Row } from 'react-native-table-component';


export function TableCell({ key, columns, columnWidth }) {
  return (
    <Row
      key={key}
      height={60}
      widthArr={columnWidth}
      data={columns}
      style={styles.border}
      textStyle={styles.text}
    />
  );
}
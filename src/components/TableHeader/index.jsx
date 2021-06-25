import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';


export function TableHeader({ columns }) {
return (
    <View style={styles.container}>
      <View style={styles.border}>
        {
          columns.map((item, index) => <Text key={index} style={styles.platformInfo}>{item}</Text>)
        }
      </View>
    </View>
  );
}
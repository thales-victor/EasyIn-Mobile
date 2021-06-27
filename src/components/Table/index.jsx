import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';


export function Table({children}) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
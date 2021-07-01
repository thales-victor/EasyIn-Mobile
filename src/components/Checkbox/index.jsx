import React from 'react';
import { View, CheckBox, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';


export function Checkbox({ isSelected, setSelection, label }) {
  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
        tintColors={{ true: theme.color.purple }}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function FlatListItem({ id, columns, onPress }) {

  function handlePress() {
    onPress(id);
  }

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={handlePress}>
      <View style={styles.platform}>
        {
          columns.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.platformInfo,
                columns.length > 1 && styles.textContainer
              ]}>
              {item}
            </Text>
          ))
        }
      </View>
      <Feather style={styles.icon} name="chevron-right" color={theme.color.text} size={24} />
    </TouchableOpacity>
  );
}
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function Header({ title, action, removeGoBack }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {
        !removeGoBack && (
          <BorderlessButton
            style={styles.icon}
            onPress={handleGoBack}
          >
            <Feather
              name="arrow-left"
              size={24}
              color={theme.color.title}
            />
          </BorderlessButton>
        )
      }

      <Text style={styles.title}>
        {title}
      </Text>

      {
        !removeGoBack && (
          action ? (
            <View style={[styles.icon, styles.action]}>
              {action}
            </View>
          ) : (
            <View style={styles.paddingRight} />
          )
        )
      }
    </View>
  );
}
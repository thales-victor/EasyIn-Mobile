import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


export function Header({ title }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={theme.color.title}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}
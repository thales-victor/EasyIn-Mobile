import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.color.text,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: theme.color.secondary,
  }
});
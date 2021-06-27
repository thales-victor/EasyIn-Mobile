import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: theme.color.secondary,
  },
  header: {
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: theme.color.title
  },
});
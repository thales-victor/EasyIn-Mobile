import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    marginTop: 30,
  },
  primary: {
    backgroundColor: theme.color.secondary,
  },
  warning: {
    backgroundColor: theme.color.warning,
  },
  secondary: {
    borderWidth: 2,
    borderColor: theme.color.secondary,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.color.title,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
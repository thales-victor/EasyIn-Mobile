import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 25
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: theme.color.title,
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: theme.color.title,
    color: theme.color.title,
    paddingHorizontal: 15,
  }
});
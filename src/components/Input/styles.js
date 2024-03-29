import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: theme.color.primary,
  },
  input: {
    borderRadius: 8,
    width: 230,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: theme.color.primary,
    color: theme.color.primary,
    paddingHorizontal: 15,
    fontSize: 18,
  }
});
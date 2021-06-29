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
    color: theme.color.title,
  },
  input: {
    borderRadius: 8,
    width: 230,
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  disabled: {
    borderColor: theme.color.disabled,
    color: theme.color.disabled,
  },
  enabled: {
    borderColor: theme.color.title,
    color: theme.color.title,
  },
  value: {
    color: theme.color.text
  }
});
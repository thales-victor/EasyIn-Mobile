import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  session: {
    marginBottom: 20,
  },
  alertText: {
    color: theme.color.warning,
    fontSize: 16,
  },
  warning: {
    color: theme.color.warning,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkboxContainer: {
    // flexDirection: 'row',
  },
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.color.secondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: theme.color.title,
    fontSize: 20,
  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.color.overlay
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.color.background,
    alignSelf: 'center',
    marginTop: 13,
  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 34,
    right: 2,
    width: 40,
    height: 46,
    borderRadius: 8,
    backgroundColor: theme.color.background
  }
});
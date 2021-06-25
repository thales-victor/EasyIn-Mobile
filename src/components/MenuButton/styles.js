import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.color.secondary,
    borderWidth: 2,
    borderRadius: 8,
    margin: 5,
  }
});
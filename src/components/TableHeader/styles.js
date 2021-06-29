import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  border: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 2,
    borderColor: theme.color.secondary,
    borderRadius: 8,
  },
  platformInfo: {
    textAlign: 'center',
    width: '50%',
    color: theme.color.title,
    fontWeight: "bold",
    fontSize: 18,
  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  platform: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  platformInfo: {
    textAlign: 'center',
    paddingLeft: 10,
    color: theme.color.text,
    fontSize: 16,
  },
  textContainer: {
    width: '50%',

  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 30,
  },
  footer: {
    width: '100%',
    marginBottom: 150
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: -20,
    marginBottom: 15,
    opacity: 0.7,
  },  
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  },
  nameStatus: {
    color: theme.color.text,
    fontSize: 13,
  },
});
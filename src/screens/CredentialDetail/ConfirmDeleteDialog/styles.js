import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: theme.color.overlay,
  },
  modalView: {
    width: '90%',
    backgroundColor: theme.color.background,
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.color.title
  },
  actions:{
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
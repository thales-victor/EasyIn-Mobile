import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  actions:{
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
import Toast from 'react-native-toast-message';

const toast = {
  error: (message, title = 'Erro') => {
    return Toast.show({
      type: 'error',
      text1: title,
      text2: message
    });
  },
  success: (message, title = 'Successo') => {
    return Toast.show({
      type: 'success',
      text1: title,
      text2: message
    });
  },
  info: (message, title = 'Atenção') => {
    return Toast.show({
      type: 'info',
      text1: title,
      text2: message
    });
  }
};

export default toast;
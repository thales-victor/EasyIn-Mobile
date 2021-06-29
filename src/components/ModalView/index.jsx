import React from 'react';
import { View, Modal } from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

export function ModalView({ children, closeModal, ...rest }) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={closeModal}
      {...rest}
    >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
    </Modal>
  );
}
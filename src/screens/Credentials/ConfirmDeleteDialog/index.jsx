import React from 'react';
import { View, Text, Modal } from 'react-native';
import { styles } from './styles';
import { DefaultButton } from '../../../components/DefaultButton';


export function ConfirmDeleteDialog({ isOpen, closeDialog, confirmDelete }) {

  return (
    <Modal
      visible={isOpen}
      onRequestClose={closeDialog}
      animationType="slide"
      transparent
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Deseja realmente excluir a credencial ?</Text>
          <View style={styles.actions}>
            <DefaultButton
              title="Confirmar"
              onPress={confirmDelete}
            />
            <DefaultButton
              title="Cancelar"
              onPress={closeDialog}
              secondary
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
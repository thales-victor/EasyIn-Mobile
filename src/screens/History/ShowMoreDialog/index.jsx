import React from 'react';
import { View, Text, Modal } from 'react-native';
import { styles } from './styles';
import { DefaultButton } from '../../../components/DefaultButton';
import { getDateTime } from '../../../utils/date';
import { Input } from '../../../components/Input';
import { ModalView } from '../../../components/ModalView';


export function ShowMoreDialog({ isOpen, closeDialog, item }) {

  if (!item) {
    return <View />
  }

  return (
    <ModalView
      visible={isOpen}
      onRequestClose={closeDialog}
      animationType="slide"
      transparent
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Input label="Usuário / E-mail" value={item.credential} editable={false} />
          <Input label="Plataforma" value={item.platform} editable={false} />
          <Input label="Data / Hora" value={getDateTime(item.createdAt)} editable={false} />
          <Input label="Realizou login" value={item.loggedIn ? 'Sim' : 'Não'} editable={false} />
        </View>
        <View style={styles.actions}>
          <DefaultButton
            title="Fechar"
            onPress={closeDialog}
            secondary
          />
        </View>
      </View>
    </ModalView>
  );
}
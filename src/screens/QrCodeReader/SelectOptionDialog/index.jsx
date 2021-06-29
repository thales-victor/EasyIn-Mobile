import React from 'react';
import { FlatList, View } from 'react-native';
import { ModalView } from '../../../components/ModalView';
import { FlatListItem } from '../../../components/FlatListItem';
import { styles } from './styles';
import { ListDivider } from '../../../components/ListDivider';
import { DefaultButton } from '../../../components/DefaultButton';


export function SelectOptionDialog({ isOpen, handleClose, handleSelectOption, options }) {

  if (!options || options.length === 0){
    return <View />;
  }

  return (
    <ModalView visible={isOpen} closeModal={handleClose}>
      <FlatList
        data={options}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <FlatListItem id={item.id} columns={[item.username]} onPress={handleSelectOption} />
        )}
        ItemSeparatorComponent={ListDivider}
      />
      <View style={styles.container}>
        <DefaultButton title="Cancelar" onPress={handleClose} secondary/>

      </View>
    </ModalView>
  );
}
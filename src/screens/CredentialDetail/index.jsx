import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { DefaultButton } from '../../components/DefaultButton';
import { GetCredentialById, CreateCredential, UpdateCredential, DeleteCredentialById } from '../../services/api/CredentialApi';
import { useNavigation } from '@react-navigation/native';
import { ModalView } from '../../components/ModalView';
import { FlatListItem } from '../../components/FlatListItem';
import { ListDivider } from '../../components/ListDivider';

import { Select } from '../../components/Select';

import { GetAllPlatforms } from '../../services/api/PlatformApi'
import { RandomPasswordDialog } from './RandomPasswordDialog';
import { ConfirmDeleteDialog } from './ConfirmDeleteDialog';
import toast from '../../components/Alert';

export function CredentialDetail({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();

  const [platform, setPlatform] = useState({ id: 0, name: 'Selecione a plataforma' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOpenPlatformModal, setIsOpenPlatformModal] = useState(false);
  const [isOpenRandomPasswordModal, setIsOpenRandomPasswordModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (id) {
      getCredentialById();
    }
    getPlatforms();
  }, []);

  async function getCredentialById() {
    const result = await GetCredentialById(id);

    if (result) {
      setPlatform(result.platform);
      setUsername(result.username);
      setPassword(result.password)
    }
  }

  async function getPlatforms() {
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms(result);
    }
  }

  async function getPlatforms() {
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms(result);
    }
  }

  async function handleSaveChanges() {
    if (id) {
      const result = await UpdateCredential(id, username, password);
      if (result) {

        toast.success('Credencial atualizada');
      }

    } else {
      const result = await CreateCredential(platform.id, username, password, confirmPassword);
      if (result) {
        toast.success('Credencial criada');
        navigation.navigate('CredentialDetail', { id: result.id });
      }
    }
  }

  async function handleGoBack() {
    navigation.goBack();
  }

  function handleOpenPlatformModal() {
    if (!id) {
      setIsOpenPlatformModal(true);
    }
  }
  function handleClosePlatformModal() {
    setIsOpenPlatformModal(false);
  }

  function handleOpenRandomPasswordModal() {
    setIsOpenRandomPasswordModal(true);
  }
  function handleCloseRandomPasswordModal() {
    setIsOpenRandomPasswordModal(false);
  }

  function handlePlatformSelect(id) {
    const platform = platforms.find(p => p.id === id);
    setPlatform(platform);
    handleClosePlatformModal();
  }

  function handleSetRandomPassword(password) {
    setPassword(password);
    if (!id) {
      setConfirmPassword(password);
    }
  }

  function handleDeleteCredential() {
    setIsOpenDeleteModal(true);
  }

  async function handleConfirmDeleteCredential() {
    const result = await DeleteCredentialById(id);
    if (result) {
      toast.success('Credencial removida');
      handleCloseDeleteDialog();
      navigation.navigate('Credentials');
    }
  }

  function handleCloseDeleteDialog() {
    setIsOpenDeleteModal(false);
  }

  return (
    <View style={styles.container}>
      <Header title={`${id ? 'Editar' : 'Criar'} senha`} />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Select label="Plataforma" value={platform.name} onPress={handleOpenPlatformModal} disabled={id} />
            <Input label="Usuário/E-mail" value={username} onChangeText={setUsername} />
            <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
            {
              !id && (
                <PasswordInput label="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} />
              )
            }
            <View style={styles.footer}>
              <DefaultButton title="Gerar senha aleatória" secondary onPress={handleOpenRandomPasswordModal} />
              <DefaultButton title="Salvar" onPress={handleSaveChanges} />
              {
                id && (
                  <DefaultButton title="Excluir" warning onPress={handleDeleteCredential} />
                )
              }
              <DefaultButton title="Voltar" secondary onPress={handleGoBack} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ModalView visible={isOpenPlatformModal} closeModal={handleClosePlatformModal}>
        <FlatList
          data={platforms}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <FlatListItem id={item.id} columns={[item.name]} onPress={platform => handlePlatformSelect(platform)} />
          )}
          ItemSeparatorComponent={ListDivider}
        />
      </ModalView>
      <RandomPasswordDialog
        isOpen={isOpenRandomPasswordModal}
        handleClose={handleCloseRandomPasswordModal}
        handleSetPassword={handleSetRandomPassword}
      />
      <ConfirmDeleteDialog
        isOpen={isOpenDeleteModal}
        closeDialog={handleCloseDeleteDialog}
        confirmDelete={handleConfirmDeleteCredential}
      />
    </View>
  );
}
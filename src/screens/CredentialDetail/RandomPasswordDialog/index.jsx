import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ModalView } from '../../../components/ModalView';
import { styles } from './styles';
import { Input } from '../../../components/Input';
import { IconButton } from '../../../components/IconButton';
import { Checkbox } from '../../../components/Checkbox';
import { DefaultButton } from '../../../components/DefaultButton';
import { GenerateRandomPassword } from '../../../services/api/RandomPasswordApi';


export function RandomPasswordDialog({ isOpen, handleClose, handleSetPassword }) {

  const [generated, setGenerated] = useState(false);
  const [passwordSize, setPasswordSize] = useState(8);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);
  const [randomPassword, setRandomPassword] = useState('');

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  function resetForm() {
    setGenerated(false);
    setPasswordSize(8);
    setUseLowerCase(true);
    setUseUpperCase(true);
    setUseNumbers(true);
    setUseSpecial(true);
    setRandomPassword('');
  }

  function handleIncreaseLength() {
    if (passwordSize < 25) {
      setPasswordSize(passwordSize + 1);
    }
  }

  function handleDecreaseLength() {
    if (passwordSize > 4) {
      setPasswordSize(passwordSize - 1);
    }
  }

  function usePassword() {
    handleSetPassword(randomPassword);
    handleClose();
  }

  async function getRandomPassword() {
    const result = await GenerateRandomPassword(passwordSize, useLowerCase, useUpperCase, useNumbers, useSpecial);
    if (result) {
      setGenerated(true);
      setRandomPassword(result.password);
    }
  }

  return (
    <ModalView visible={isOpen} closeModal={handleClose}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.session}>
            <Text style={styles.alertText}>
              <Text style={styles.warning}>ATENÇÃO: </Text>
              Gerar uma senha aleatória não altera a senha da plataforma desejada. Para isso, é necessário entrar na plataforma e alterar manualmente.
            </Text>
          </View>
          
          <View style={styles.session}>
            <View style={styles.inputContainer}>
              <Input
                label="Tamanho (4~25 dígitos)"
                value={passwordSize.toString()}
                editable={false}
              />
              <View style={styles.buttons}>
                <IconButton
                  name="plus-circle"
                  onPress={handleIncreaseLength}
                  disabled={passwordSize >= 25}
                />
                <IconButton
                  name="minus-circle"
                  onPress={handleDecreaseLength}
                  disabled={passwordSize <= 4}
                />
              </View>
            </View>
          </View>
          
          <View style={styles.session}>
            <View style={styles.checkboxContainer}>
              <Checkbox label="Letra minúsculas" isSelected={useLowerCase} setSelection={setUseLowerCase} />
              <Checkbox label="Letra maiúsculas" isSelected={useUpperCase} setSelection={setUseUpperCase} />
              <Checkbox label="Números" isSelected={useNumbers} setSelection={setUseNumbers} />
              <Checkbox label="Caracteres especiais" isSelected={useSpecial} setSelection={setUseSpecial} />
            </View>
          </View>
          
          <View style={styles.session}>
            <Input
              label="Nova senha"
              value={randomPassword}
              editable={false}
            />
          </View>
          
          <View style={styles.session}>
            <DefaultButton title="Gerar" onPress={getRandomPassword} />
            {
              generated && (
                <DefaultButton title="Usar" onPress={usePassword} />
              )
            }
            <DefaultButton title="Cancelar" secondary onPress={handleClose} />
          </View>
        </View>

      </ScrollView>
    </ModalView>
  );
}
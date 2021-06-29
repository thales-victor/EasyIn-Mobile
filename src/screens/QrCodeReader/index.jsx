import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { DefaultButton } from '../../components/DefaultButton';
import QrImg from '../../assets/Qr.png';
import { CreateQrCodeLogin } from '../../services/api/QrCodeApi'
import { SelectOptionDialog } from './SelectOptionDialog';
import toast from '../../components/Alert';

export function QrCodeReader() {

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [showCredentialOptions, setShowCredentialOptions] = useState(false);
  const [credentialOptions, setCredentialOptions] = useState([]);
  const [qrCodeData, setQrCodeData] = useState({});

  useEffect(() => {
    getPermission();
  }, []);

  async function getPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  function handleQrCodeScanned({ data }) {
    if (data) {
      try {
        let json = JSON.parse(data);
        setQrCodeData(json);
        createQrCodeLogin(json.platformId, json.browserToken);
      } catch (error) {
        toast.error(error);
      }
    }
  }

  function handleSelectCredentialOption(credentialId) {
    setShowCredentialOptions(false);
    createQrCodeLogin(qrCodeData.platformId, qrCodeData.browserToken, credentialId);
  }

  async function createQrCodeLogin(platformId, browserToken, credentialId) {
    setScanned(true);
    let result = await CreateQrCodeLogin(platformId, browserToken, credentialId);
    if (result) {
      if (result.credentials !== null && result.credentials.length > 0) {
        setScanned(false);
        setCredentialOptions(result.credentials);
      } else {
        toast.success("Login criado com sucesso");
      }
    } else {
      toast.error('Não foi possível realizar o login. Tente novamente');
    }
  };
  
  function handleCloseSelectOptionDialog() {
    setShowCredentialOptions(false);
  }

  if (!hasPermission) {
    return <Text>Sem permissão de acesso à câmera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Leitor de QRCODE" />
      {
        !scanned
          ? (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleQrCodeScanned}
              style={styles.camera}
              type={BarCodeScanner.Constants.Type.back}
              barCodeTypes={BarCodeScanner.Constants.BarCodeType.qr}
            >
              <View style={styles.imageContent} >
                <Image
                  style={styles.image}
                  source={QrImg}
                />
              </View>
            </BarCodeScanner>
          )
          : (
            <View style={styles.content}>
              <DefaultButton
                title="Ler QR Code"
                onPress={() => setScanned(false)}
              />
            </View>
          )
      }

      <SelectOptionDialog
        options={credentialOptions}
        isOpen={showCredentialOptions}
        handleClose={handleCloseSelectOptionDialog}
        handleSelectOption={handleSelectCredentialOption}
      />
    </SafeAreaView>
  );
}
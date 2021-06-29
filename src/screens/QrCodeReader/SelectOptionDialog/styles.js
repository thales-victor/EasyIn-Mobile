import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingBottom: getBottomSpace() + 25,
  }
});
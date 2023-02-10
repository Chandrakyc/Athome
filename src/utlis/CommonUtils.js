import { Alert } from 'react-native';
import CONSTANTS from '../common/constant';

export function isValidEmail(string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (reg.test(string) === true) {
    return true;
  }
  return false;
}
export function isValidPassword(string) {
  let reg = /^[A-Za-z]\w{7,14}$/;
  if (reg.test(string) === true) {
    return true;
  }
  showSimpleAlert(CONSTANTS.InvalidPasswordErrorMessage);
  return false;
}
export function showSimpleAlert(message) {
  Alert.alert(CONSTANTS.AppName, message, [{ text: 'OK', onPress: () => { } }], {
    cancelable: false,
  });
}


export function converTimetoSecond(hms) {
  var a = hms.split(':'); // split it at the colons
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  return seconds
}

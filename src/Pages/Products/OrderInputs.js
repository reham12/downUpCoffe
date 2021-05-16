import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styleModal';
import IntlPhoneInput from 'react-native-intl-phone-input';


const OrderInputs = ({onConfirmOrder}) => {
  const [text, setText] = useState(' ');

  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.inputTextContiner}>
          <Text style={styles.inputText}>Name</Text>
        </View>

        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputTextContiner}>
          <Text style={styles.inputText}>Phone number</Text>
        </View>
        <View>
          <IntlPhoneInput
            defaultCountry="JO"
            containerStyle={styles.containerPhoneInput}
            phoneInputStyle={styles.phoneInputStyle}
            dialCodeTextStyle={styles.dialCode}
            flagStyle={styles.flag}
          />
        </View>
      </View>
      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          style={styles.orderActions}
          onPress={() => onConfirmOrder(true)}>
          <Text style={styles.orderActionsText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderInputs;

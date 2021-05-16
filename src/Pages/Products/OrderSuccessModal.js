import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import doneIcon from '../../assets/images/doneIcon.png';

const OrderSuccessModal = ({show, onShowModal}) => {
  return (
    <Modal
      testID={'modal'}
      animated
      animationType="fade"
      visible={show}
      onBackdropPress={() => onShowModal(false)}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={1}
        reducedTransparencyFallbackColor="black"
      />
      <View style={styles.content}>
        <Image source={doneIcon} />
        <Text style={styles.doneText}>Done</Text>
        <Text style={styles.basicText}>We recived your Order </Text>
        <Text style={styles.basicText}>you’ll be notified soon</Text>
        <View style={{flexDirection:"row",paddingVertical:30}}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => onShowModal(false)}>
            <Text style={styles.submitButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  doneText:{
    color: "#6EB04F",
    fontSize:22,
    paddingVertical:20
  },
  basicText:{
    color:"#383838",
    fontSize:15
  },
  submitButton:{
    backgroundColor:"#CF8E62",
    flexBasis:"60%",
    borderRadius:6,
    height:38,
    justifyContent:"center",
    alignItems:"center"
  },
  submitButtonText:{
    color: "#fff",
    fontSize:22
  }
});

export default OrderSuccessModal;

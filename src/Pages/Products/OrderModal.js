import React, {useState} from 'react';
import {Text, Modal, View, TouchableOpacity, Image} from 'react-native';
import swish from '../../assets/images/swish.png';
import MinusIcon from '../../assets/images/MinusIcon.png';
import PlusIcon from '../../assets/images/PlusIcon.png';
import doneIcon from '../../assets/images/doneIcon.png';
import CloseIcon from '../../assets/images/CloseIcon.png';
import styles from './styleModal';
import OrderInputs from './OrderInputs';

const OrderModal = ({
  showModal,
  item,
  onSuccessOrder,
  confirmOrder,
  setConfirmOrder,
  setShowModal,
  setVisibleOrder,
  visibleOrder,
  handleConfirm,
  onClear
}) => {

  const _renderModalBody = () => {
    return (
      <>
        <View style={styles.cupCoffeContainer}>
          <Text style={styles.cupCoffeTitle}>Cup of coffee</Text>
          <View style={styles.cupCoffeActions}>
            <TouchableOpacity style={styles.cupCoffeActionsPlus}>
              <Image source={PlusIcon} style={styles.plusImage} />
            </TouchableOpacity>
            <Text style={styles.cupCoffeActionsText}>1</Text>
            <TouchableOpacity style={styles.cupCoffeActionsPlus}>
              <Image source={MinusIcon} style={styles.plusImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cupCoffeContainer}>
          <Text style={styles.cupCoffeTitle}>Price</Text>
          <Text style={styles.cupCoffeActionsText}>$5</Text>
        </View>

        <View style={styles.orderActionsContainer}>
          <TouchableOpacity
            style={styles.orderActions}
            onPress={() => {
              !confirmOrder ? setVisibleOrder(true) : onSuccessOrder();
            }}>
            {confirmOrder && (
              <Image
                source={doneIcon}
                style={{width: 20, marginHorizontal: 5, resizeMode: 'contain'}}
              />
            )}
            <Text
              style={[
                styles.orderActionsText,
                confirmOrder && styles.orderActionsActiveText,
              ]}>
              Vip Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderActions}>
            <Image source={swish} style={{width: 100, resizeMode: 'contain'}} />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <Modal
      animated
      animationType="fade"
      visible={showModal}
      transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' ,alignItems:"center",paddingBottom:20}}>
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={styles.containerClose}
              onPress={() =>onClear()}>
              <Image style={{width:15,resizeMode:"contain"}} source={CloseIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Order</Text>

            <View />
          </View>

          <View style={styles.body}>
            {!visibleOrder ? (
              _renderModalBody()
            ) : (
              <OrderInputs onConfirmOrder={handleConfirm} />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;

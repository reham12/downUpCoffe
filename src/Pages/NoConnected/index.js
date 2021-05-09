import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../Components/Header';
import SocialMedia from '../../Components/SocialMedia';
import NoConnectedImage from '../../assets/images/noConnected.png';
import styles from './style';

const NoConnected = () => {
  return (
    <View style={styles.ScrollView}>
      <View>
        <Header />
      </View>
      <View style={styles.containerNoConnected}>
        <View style={[styles.imageNoConnected]}>
          <Image source={NoConnectedImage} />
        </View>
        <View style={[styles.containerText]}>
          <Text style={{color:"#42210B"}}>Sorry But we are closed at the moment</Text>
          <Text style={{color:"#42210B"}}>you’ll be notified when we open</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <SocialMedia />
      </View>
    </View>
  );
};

export default NoConnected;

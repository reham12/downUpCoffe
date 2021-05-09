import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import Twitter from "../../assets/images/twitter.png"
import Instagram from "../../assets/images/instagram.png"
import Facebook from "../../assets/images/facebook.png"

const SocialMedia = () => {
  return (
    <View style={styles.containerSocailMedia}>
      <Image style={[styles.imageFacebook]} source={Facebook} />
      <Image style={[styles.imageInstagram]} source={Instagram} />
      <Image style={[styles.imageTwitter]} source={Twitter} />
    </View>
  );
};

export default SocialMedia;

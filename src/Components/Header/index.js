import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import Logo from '../../assets/images/Logo.png';

const Header = () => {
  return <Image style={[styles.imageLogo]} source={Logo} />;
};

export default Header;

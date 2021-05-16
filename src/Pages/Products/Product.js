import React from 'react';
import {useState} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import productImage from '../../assets/images/product1.png';
import backgroundImage from '../../assets/images/backgroundImage.png';
import {VibrancyView} from '@react-native-community/blur';
const Product = ({onShowModal, item}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          margin: 12,
          position: 'relative',
          height: 160,
          elevation:10,
          borderRadius: 18
        }}
        onPress={() => onShowModal(item)}>
        <ImageBackground
          style={{
            resizeMode: 'cover',
            zIndex: 9999999999,
          }}
          imageStyle={{borderRadius: 18}}
          source={backgroundImage}>
          <View>
            <Text
              style={{
                color: '#CF8E62',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              $5
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: 100,
              }}>
              <Image source={productImage} resizeMode="contain" />
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: '#CF8E62',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            width: '100%',
            height: '50%',
            paddingVertical: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'absolute',
            bottom: 1,
      
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              textTransform: 'capitalize',
              elevation: 10,
            }}>
            coffee
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Product;

import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import productImage from '../../assets/images/product1.png';

const Product = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
     
      }}>
      <View
        style={{
          backgroundColor: '#C9E3E7',
          borderRadius: 15,
          width:"100%"
        }}>
        <Text
          style={{color: '#CF8E62', paddingHorizontal: 10, paddingVertical: 5}}>
          $5
        </Text>
        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}>
          <Image source={productImage} />
        </View>
      </View>
      <View style={{
            backgroundColor: '#CF8E62',
            borderRadius: 5,
            width:"100%",
            paddingVertical:10,
            // transform: [
               
            //     {  matrix:-20 },
            //   ],
     
          }}>
        <Text style={{textAlign:"center",color:"white"}}>coffe</Text>
      </View>
    </View>
  );
};

export default Product;

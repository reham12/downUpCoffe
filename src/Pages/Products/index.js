import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl, Text} from 'react-native';
import styles from './style';
import {DATA} from './Data.js';
import Header from '../../Components/Header';
import SocialMedia from '../../Components/SocialMedia';
import Product from './Product';

const products = DATA;

const Products = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [numberItems, setNumberItems] = useState(4);
  const [data, setData] = useState(products.slice(0, numberItems));

  const onRefresh = () => {
    setTimeout(function () {
      setIsRefreshing(false);
    }, 1500);
  };
  const handleLoadMore = () => {
    setIsRefreshing(true);
    setData(data.concat(products.slice(numberItems, numberItems * 2)));
    setNumberItems(numberItems * 2);
  };

  useEffect(() => {
    onRefresh();
  }, [data]);

  return (
    <View style={styles.ScrollView}>
      <View>
        <Header />
      </View>
      <FlatList
        data={data}
        extraData={useState}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        renderItem={(item, index, separators) =><Product />}
        keyExtractor={item => item.key}
        numColumns={2}
        onEndReachedThreshold={2}
        onEndReached={handleLoadMore}
        style={{
          paddingHorizontal: 10,
        
        }}
      />

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 15,
          left: 0,
          right: 0,
          justifyContent: 'center',
        }}>
        <SocialMedia />
      </View>
    </View>
  );
};

export default Products;

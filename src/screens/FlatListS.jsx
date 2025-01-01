import { FlatList, Pressable } from 'react-native';
import React from 'react';
import { Products } from './ProductInfo';
import ProductItems from '../Components/ProductItems';
import { Button, Text } from '@react-navigation/elements';

const FlatListS = () => {

  const productDisplay = ( { item } ) => <ProductItems pimage = { item.pimage } name = { item.name } price = { item.price } descrip={ item.description }/>;

  return (
    <FlatList 
      data = { Products }
      renderItem = { productDisplay }
      keyExtractor={ (item) => item.pid }
      ListHeaderComponent={ <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10}}>Products</Text> }
      contentContainerStyle = { { paddingHorizontal : 3 } }
    />
  );
};

export default FlatListS;
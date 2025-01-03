import { FlatList } from 'react-native';
import React from 'react';
import { Products } from './ProductInfo';
import ProductItems from '../Components/ProductItems';

const GridList = () => {
    
  const productDisplay = ( { item } ) =>
  <ProductItems pimage = { item.pimage } name = { item.name } price = { item.price } descrip={ item.description }/>;

  return (
    <FlatList 
      data = { Products }
      renderItem = { productDisplay }
      keyExtractor={ (item) => item.pid }
      numColumns={2}
      contentContainerStyle = { { paddingHorizontal : 3 } }
    />
  );
};

export default GridList;
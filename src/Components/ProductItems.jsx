import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProductItems = ({pimage, name, price, descrip}) => {

    const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('PDP', {pimage : {pimage}, pname : {name}, pprice : {price}, pdesc : {descrip}})} style = { { backgroundColor : 'white', borderWidth : 5, borderColor : 'white', padding: 20, marginVertical: 2, marginHorizontal: 2, borderRadius: 8 } }>
      <Image source= {pimage} style={ { width: 150, height: 150 } } />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </Pressable>
  );
};

export default ProductItems;
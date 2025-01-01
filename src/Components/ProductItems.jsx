import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProductItems = ({pimage, name, price, descrip}) => {

  const navigation = useNavigation();

  return (
    <Pressable
    onPress={() => navigation.navigate('Product Details', {pimage, pname : name, pprice : price, pdesc : descrip})}
    style = { { backgroundColor : 'white', borderWidth : 5, borderColor : 'white', padding: 20, marginVertical: 2, marginHorizontal: 2, borderRadius: 8, justifyContent: 'center', alignItems: 'center' } }>
      <Image source= {pimage} style={ { width: 150, height: 150, marginBottom: 10 } } />
        
      <View style={{ marginTop: 5, alignItems: 'center' }}>

        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>₹{price}</Text>
        
      </View>

    </Pressable>
  );
};

export default ProductItems;
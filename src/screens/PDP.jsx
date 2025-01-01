import { View, Text, Image } from 'react-native';
import React from 'react';

const PDP = ( props ) => {

  const {pimage, pname , pprice, pdesc} = props.route.params;

  return (
    <View>
      <Image source={{pimage}} style={ { alignContent: 'center', width: 150, height: 150 } } />
      <Text style = { { justifyContent : 'center', alignContent : 'center' } }>Name of product : {pname}</Text>
      <Text></Text>
      <Text style = { { justifyContent : 'center', alignContent : 'center' } }>Price: {pprice}</Text>
      <Text></Text>
      <Text style = { { justifyContent : 'center', alignContent : 'center' } }>About the product:</Text>
      <Text style = { { justifyContent : 'center', alignContent : 'center' } }>{pdesc}</Text>
      
    </View>
  );
};

export default PDP;
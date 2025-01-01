import { View, Text, Image } from 'react-native';
import React from 'react';

const PDP = ( props ) => {

  const {pimage, pname , pprice, pdesc} = props.route.params;

  return (
    <View style= { { justifyContent: 'center', alignItems: 'center' } }>

      <Image source={pimage}
      style={ { justifyContent: 'center', alignContent: 'center', width: 400, height: 400 } } />

      <Text style = { { justifyContent : 'center', alignContent : 'center', fontSize: 22 } }>
        {pname}
      </Text>
      <Text style = { { justifyContent : 'center', alignContent : 'center', fontSize: 18 } }>
        Price: ₹{pprice}
      </Text>

      <Text></Text>

      <Text style = { { justifyContent : 'center', alignContent : 'center', fontSize: 16 } }>
        Product Description:
      </Text>
      <Text style = { { justifyContent : 'center', alignContent : 'center', fontSize: 14 } }>
        {pdesc}
      </Text>
      
    </View>
  );
};

export default PDP;
import { View, Text, Button } from 'react-native';
import React from 'react';

const PLP = ( { navigation } ) => {
  return (
    <View>
      <Text>PLP</Text>
      <Button title="Go to PDP" onPress={() => navigation.navigate('PDP', {pname : 'Hi', pprice : 200, pdesc : 'This is a Product.'})} />
    </View>
  );
};

export default PLP;
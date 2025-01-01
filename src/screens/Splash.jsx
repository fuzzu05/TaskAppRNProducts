import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

  const navigation =useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PLP');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
    style={ { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' } }>
    
      <Image source={require('../logo.png')}
      style={ { width: 150, height: 150 } } />

      <Text style={ { marginTop: 20, fontSize: 18, color: '#000000' } }>
        Products Trial
      </Text>
    
    </View>
  );
};

export default Splash;
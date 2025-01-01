import { View, Text, Pressable, Alert, Image } from 'react-native';
import React, {useState} from 'react';
import FlatListS from './FlatListS';
import GridList from './GridList';
import listImg from '../listView.png';
import gridImg from '../gridView.png';

const PLP = () => {

  const [viewNameText,setViewNameText] = useState('List View');
  const [viewName, setViewName] = useState(listImg);

  const changeViewName = () => {
    if (viewName === gridImg) {
      setViewName(listImg);
      setViewNameText('List View');
    } else {
      setViewName(gridImg);
      setViewNameText('Grid View');
    }
  };

  return (
    <View>
      <Text style={ { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 5 } }>
        Products
      </Text>

      <Pressable onPress={changeViewName} style={{ position: 'absolute', top: 10, right: 10, alignItems: 'center', }} >

        <Image source={viewName}
        style={{ width: 30, height: 30, marginRight: 5 }} />

        <Text style={{ textAlign:'center', fontSize: 10, fontWeight: 'bold', marginBottom: 2 }}>
          {viewNameText}
        </Text>

      </Pressable>

      {viewName === listImg ? <GridList /> : <FlatListS />}
      
    </View>
  );
};

export default PLP;
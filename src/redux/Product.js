import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

import { UseDispatch, useDispatch } from 'react-redux';
import { addToCart } from './action';

const Product = (props) => {

  const item = props.item; 
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    // console.warn('Called',item);
    dispatch(addToCart(item))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{item.name}</Text>
      <Text style={styles.txt}>{item.price}</Text>
      <Text style={styles.txt}>{item.color}</Text>
      <Image style={styles.img} source={{uri: item.image}} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomColor: 'orange', borderBottomWidth: 1, padding: 20},
  txt: {fontSize: 20, fontWeight: '500', color: 'black'},
  img: {width: 70, height: 80},
});

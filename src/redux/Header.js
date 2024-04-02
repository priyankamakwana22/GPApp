import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { UseSelector, useSelector } from 'react-redux';       // whenever there is use word then it is a hook

const Header = () => {
  
  // const cartData = useSelector((state) => state.reducer)

  // console.warn(cartData);

  // useEffect(() => {})

  return (
    <View>
      <Text style={styles.txt}>0</Text>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  txt: {fontSize: 30, textAlign: 'right' ,fontWeight: '500', color: 'black', backgroundColor:'orange'},
});

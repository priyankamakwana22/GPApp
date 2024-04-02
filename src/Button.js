import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const Button = (props) => {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0c7ccb',
    borderRadius: 15,
    width: '60%',
    marginTop: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '400',
  },
});

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = props => {
  return <Text style={styles.head}>{props.heading}</Text>;
};

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
});
export default Heading;

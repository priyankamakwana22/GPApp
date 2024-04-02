import React from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from '../src/Heading';

const CreateAccount = () => {
  return (
    <View style={styles.cont}>
      <Heading heading="Create Account" />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  cont: {alignItems: 'center', justifyContent: 'center', flex: 1},
});



import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View, Pressable} from 'react-native';
import {State, TextInput} from 'react-native-gesture-handler';
// redux
import userReducer from '../redux_thunk/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge, increaseAge} from '../redux_thunk/actions';


const Home = ({navigation}) => {
  const {age,name} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value !== null) {
          let user = JSON.parse(value);
          dispatch(setName(user.Name));
          dispatch(setAge(user.Age));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'Your data has not been updated');
    } else {
      try {
        // await AsyncStorage.setItem('UserName', name);
        var user = {
          Name: name,
        };
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('success', 'Your data has been updated');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('UserName');    // We need to provide the key which we want to remove
      await AsyncStorage.clear(); // We don't need to provide any key it removes all the keys with the value
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>HomeScreen</Text>
      <TextInput
        style={styles.input}
        onChangeText={name => (setName(name))}
        placeholder="Enter name"></TextInput>

      <Pressable style={styles.btn} onPress={updateData}>
        <Text style={styles.txt1}>Update</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={removeData}>
        <Text style={styles.txt1}>Delete</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => {dispatch(increaseAge())}}>
        <Text style={styles.txt1}>Increase</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    width: '95%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    padding: 15,
  },
  txt1: {fontSize: 20, fontWeight: '500', color: 'white'},
  btn: {
    height: 40,
    marginTop: 40,
    width: 80,
    backgroundColor: '#5072A7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

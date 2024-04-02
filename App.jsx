
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import Login from './src/AsyncScreens/Login';
import 'react-native-gesture-handler';
import Home from './src/AsyncScreens/Home';
//  REDUX
import { Provider } from 'react-redux';
import  store  from './src/redux_thunk/store';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>

    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;





//     REDUX TOOLKIT




// import React from 'react';
// import Product from './src/redux/Product';
// import {Image, StyleSheet, Text, Button, View} from 'react-native';
// import Header from './src/redux/Header';
// import {ScrollView} from 'react-native';

// const App = () => {
//   const products = [
//     {
//       name: 'Samsung Mobile',
//       color: 'white',
//       price: 30000,
//       image:
//         'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM=',
//     },
//     {
//       name: 'Apple I Phone',
//       color: 'blue',
//       price: 130000,
//       image:
//         'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM=',
//     },
//     {
//       name: 'Nokia Mobile',
//       color: 'black',
//       price: 50000,
//       image:
//         'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM=',
//     },
//     {
//       name: 'Xiami Mobile',
//       color: 'green',
//       price: 20000,
//       image:
//         'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM=',
//     },
//   ];

//   return (
//     <View>
//       <Header />
//       <ScrollView>
//         {products.map(item => (
//           <Product item={item} />
//         ))}

//         {/* <Text>Hello</Text> */}
//       </ScrollView>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
//   txt: {fontSize: 20, fontWeight: 'bold', color: 'black'},
//   img: {width: 70, height: 80},
// });



// // App.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import CustomInput from './Screens/NewAccount';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <CustomInput
//         placeholder="Enter your email"
//         keyboardType="email"
//         style={styles.input}
//       />
//       <CustomInput
//         placeholder="Enter your password"
//         keyboardType="password"
//         style={styles.input}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default App;

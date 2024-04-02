// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   Text,
//   Pressable,
//   Image,
// } from 'react-native';
// import Button from '../src/Button';
// import Heading from '../src/Heading';

// const Login = () => {
//   const [number, setNumber] = useState('');
//   const [password, setNum] = useState('');
//   const [show, setShow] = useState(false);
//   const showPass = () => {
//     setShow(!show);
//   };

//   return (
//     <View style={styles.cont}>
//       <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
//       <Heading heading="Welcome to" />
//       <Text style={styles.head2}>GPSC Prep App</Text>

//       {/* TextInput for mobile number view */}

//       <View style={styles.txt}>
//         {/* <Image style={styles.img} source={require('../assets/key.png')} /> */}
//         <TextInput
//           style={styles.placeholderText}
//           placeholder="Enter your mail"
//           keyboardType="email-address"
//           secureTextEntry={show}></TextInput>
//       </View>

//       {/* password text input  */}

//       <View style={styles.txt}>
//         {/* <Image style={styles.img} source={require('../assets/key.png')} /> */}
//         <TextInput
//           style={styles.placeholderText}
//           placeholder="Enter password"
//           keyboardType="visible-password"
//           secureTextEntry={show}></TextInput>
//         <Pressable onPress={showPass} style={{padding: 10, flex: 0.1}}>
//           {show ? (
//             <Image style={styles.img2} source={require(`../assets/view.png`)} />
//           ) : (
//             <Image style={styles.img2} source={require(`../assets/hide.png`)} />
//           )}
//         </Pressable>
//       </View>
//       <Text style={styles.fp}>Forgot password?</Text>
//       {/* Login button  */}

//       <Button title="Login" />

//       <View
//         style={{
//           flexDirection: 'row',
//           alignSelf: 'center',
//           marginTop: 20,
//           gap: 3,
//           marginBottom: 3,
//         }}>
//         <Text style={styles.sugg}>Don't have an account?</Text>
//         <Text style={styles.highlighted}>Click Here</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   logo: {height: 120, width: 120, marginBottom: 30, borderRadius: 20},
//   cont: {alignItems: 'center', justifyContent: 'center', flex: 1},
//   txt: {
//     flexDirection: 'row',
//     fontSize: 20,
//     borderWidth: 1,
//     width: '90%',
//     borderRadius: 15,
//     paddingLeft: 20,
//     paddingRight: 20,
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#F5F5F5',
//     borderColor: '#F5F5F5',
//     color: 'gray',
//     height: 50,
//   },
//   head2: {
//     fontSize: 30,
//     color: 'black',
//     marginBottom: 40,
//     fontWeight: '500',
//   },
//   img: {
//     height: 20,
//     width: 20,
//     marginRight: 10,
//   },
//   img2: {
//     height: 20,
//     width: 20,
//   },
//   placeholderText: {
//     fontSize: 15,
//     width: '80%',
//     flex: 0.9,
//   },
//   fp: {
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     color: 'black',
//     textAlign: 'right',
//     marginLeft: 230,
//   },
//   sugg: {color: 'black', fontSize: 16},
//   highlighted: {color: 'blue', textDecorationLine: 'underline', fontSize: 15},
// });

// export default Login;

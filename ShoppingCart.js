import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator,createAppContainer } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './containers/HomeScreen'
import Cat1Screen from './containers/Cat1Screen'
import Cat2Screen from './containers/Cat2Screen'
import Cat3Screen from './containers/Cat3Screen'
import Cat4Screen from './containers/Cat4Screen'
import Cat5Screen from './containers/Cat5Screen'
import Cat6Screen from './containers/Cat6Screen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
// class ShoppingCart extends Component {
//     render() {
//         return (
//             <AppStackNavigator />
//         );
//     }
// }
const ShoppingCart=createStackNavigator();
// const ShoppingCart = createAppContainer(AppStackNavigator);
export  default ShoppingCart;

// const AppStackNavigator = createStackNavigator({
//     HomeScreen: HomeScreen,
//     Cat1: Cat1Screen,
//     Cat2:Cat2Screen,
// Cat3:Cat3Screen,
//     Cat4:Cat4Screen,
//     Cat5:Cat5Screen,
//     Cat6:Cat6Screen,
//     Cart: CartScreen
// //     Home:{
// //     initialRouteName: 'HomeScreen'
// //   },
// } , {
//         navigationOptions: {
//             headerTitle: 'Shopping App',
//             headerRight: (
//                 <ShoppingCartIcon />
//             )
//         }
//     })

    const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
           options={{ title: 'Shopping App' }}
           
           
        />
        <Stack.Screen name="Cart" component={CartScreen} />
         <Stack.Screen name="Cat1" component={Cat1Screen} />
          <Stack.Screen name="Cat2" component={Cat2Screen} />
           <Stack.Screen name="Cat3" component={Cat3Screen} />
            <Stack.Screen name="Cat4" component={Cat4Screen} />
             <Stack.Screen name="Cat5" component={Cat5Screen} />
              <Stack.Screen name="Cat6" component={Cat6Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
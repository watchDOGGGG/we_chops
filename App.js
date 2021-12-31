import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Platform} from 'react-native';
import Auth from './src/pages/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthTemplate from './src/pages/Authentication/authTemplate';
import ItemReview from './src/pages/itemReview';
import Layout from './src/pages/layout';
import Cart from './src/pages/cart';
import Checkout from './src/pages/checkout';
import Search from './src/pages/search';

// set up redux
import { Provider } from 'react-redux';
import { Store } from './src/store/store';
import Verification from './src/pages/Authentication/Verification/verification';


export default function App() {

  const Stack = createNativeStackNavigator()

  return (
   <Provider store={Store}>
      <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name={"welcome"} component={Auth} options={{
            headerShown:false,
          }} />
          <Stack.Screen name={"Authentication"} component={AuthTemplate} options={{headerShown:false,}}/>
         <Stack.Screen name={"menu"} component={Layout}  options={{headerShown:false,title:''}}/>
         <Stack.Screen name={"itemreview"} component={ItemReview}  options={{headerShown:true,title:''}}/>
         <Stack.Screen name={"cart"} component={Cart}  options={{headerShown:true,title:'my cart',}}/>
          <Stack.Screen name={"search"} component={Search}  options={{headerShown:false,title:'',}}/>
          <Stack.Screen name={"verification"} component={Verification} options={{headerShown:false,}}/>
          <Stack.Screen name={"checkout"} component={Checkout}  options={{headerShown:true,title:'checkout',}}/>
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white' ,   
    marginTop: Platform.OS === "android"?StatusBar.currentHeight:0
  },
});

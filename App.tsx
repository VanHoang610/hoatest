/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MerchantNavigation from '../AppMerchant/src/component/merchant/MerchantNavigation'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/component/merchant/screens/Login';
import Register from './src/component/merchant/screens/Register';
import OTP from './src/component/merchant/screens/OTP';

function App(): React.JSX.Element {
  return (
      
    <NavigationContainer>
      <MerchantNavigation/>
    </NavigationContainer>
  );
}



export default App;

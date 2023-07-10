/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ClassView from './src/components/ClassView';
import FunctionView from './src/components/FunctionView';


function App(): JSX.Element {
  return ( 
    <SafeAreaView>
      <ClassView name="classname" age={25}></ClassView>
      <FunctionView></FunctionView>
    </SafeAreaView>  
   );
}


export default App;

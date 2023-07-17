/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import ViewDemo from './src/components/FunctionComponents/ViewDemo';
import TextDemo from './src/components/FunctionComponents/TextDemo';
import ImageDemo from './src/components/FunctionComponents/ImageDemo';
import ImageBackgroundDemo from './src/components/FunctionComponents/ImageBackgroundDemo';
import TextInputDemo from './src/components/FunctionComponents/TextInputDemo';
import TouchableOpacityDemo from './src/components/FunctionComponents/TouchableOpacityDemo';
import TouchableHighlightDemo from './src/components/FunctionComponents/TouchableHighlightDemo';
import TouchableWithoutFeedbackDemo from './src/components/FunctionComponents/TouchableWithoutFeedbackDemo';
import ButtonDemo from './src/components/FunctionComponents/ButtonDemo';
import PressableDemo from './src/components/FunctionComponents/PressableDemo';
import ScrollViewDemo from './src/components/FunctionComponents/ScrollViewDemo';
import FlatListDemo from './src/components/FunctionComponents/FlatListDemo';
import SectionListDemo from './src/components/FunctionComponents/SectionListDemo';
import ModalDemo from './src/components/FunctionComponents/ModalDemo';
import SwitchDemo from './src/components/FunctionComponents/SwitchDemo';
import PersonalInfo from './src/components/FunctionComponents/PersonalInfo';


import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {/* <ViewDemo></ViewDemo> */}
        {/* <TextDemo></TextDemo> */}
        {/* <ImageDemo></ImageDemo> */}
        {/* <ImageBackgroundDemo></ImageBackgroundDemo> */}
        {/* <TextInputDemo></TextInputDemo> */}
        {/* <TouchableOpacityDemo></TouchableOpacityDemo>   */}
        {/* <TouchableHighlightDemo></TouchableHighlightDemo> */}
        {/* <TouchableWithoutFeedbackDemo></TouchableWithoutFeedbackDemo> */}
        {/* <ButtonDemo></ButtonDemo> */}
        {/* <PressableDemo></PressableDemo> */}
        {/* <ScrollViewDemo></ScrollViewDemo> */}
        {/* <FlatListDemo></FlatListDemo> */}
        {/* <SectionListDemo></SectionListDemo> */}
        {/* <ModalDemo></ModalDemo> */}
        {/* <SwitchDemo></SwitchDemo> */}
        <PersonalInfo></PersonalInfo>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',    
  }
});

export default App;

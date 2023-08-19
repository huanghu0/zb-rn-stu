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
import TestApi from './src/components/FunctionComponents/TestApi';
import Anim from './src/anim/Anim';
import Anim2 from './src/anim/Anim2';
import Anim3 from './src/anim/Anim3';
import Anim4 from './src/anim/Anim4';
import Anim5 from './src/anim/Anim5';
import Anim6 from './src/anim/Anim6';
import Anim7 from './src/anim/Anim7';
import FollowScroll from './src/anim/FollowScroll';
import Anim8 from './src/anim/Anim8';
import Anim9 from './src/anim/Anim9';
import AnimShow from './src/anim/AnimShow';
import AccountHome from './src/accountManage/modules/Home'
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView 
      style={styles.root}
    >
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      {/* <View style={styles.container}>
        <ViewDemo></ViewDemo>
        <TextDemo></TextDemo>
        <ImageDemo></ImageDemo>
        <ImageBackgroundDemo></ImageBackgroundDemo>
        <TextInputDemo></TextInputDemo>
        <TouchableOpacityDemo></TouchableOpacityDemo>  
        <TouchableHighlightDemo></TouchableHighlightDemo>
        <TouchableWithoutFeedbackDemo></TouchableWithoutFeedbackDemo>
        <ButtonDemo></ButtonDemo>
        <PressableDemo></PressableDemo>
        <ScrollViewDemo></ScrollViewDemo>
        <FlatListDemo></FlatListDemo>
        <SectionListDemo></SectionListDemo>
        <ModalDemo></ModalDemo>
        <SwitchDemo></SwitchDemo>
        <PersonalInfo></PersonalInfo>
        <TestApi></TestApi>
        <Anim></Anim>
        <Anim2></Anim2>
        <Anim3></Anim3>
        <Anim4></Anim4>
        <Anim6></Anim6>
        <Anim7></Anim7>
        <FollowScroll></FollowScroll>
        <Anim8></Anim8>
        <Anim9></Anim9>
        <AnimShow></AnimShow>
      </View> */}
      <AccountHome></AccountHome>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container:{
  //   // flex:1,
  //   width: '100%',
  //   height: '100%',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   backgroundColor: 'white',    
  // }
  root:{
    width:'100%',
    height:'100%',
    backgroundColor:'#f5f5f5'
  }
});

export default App;

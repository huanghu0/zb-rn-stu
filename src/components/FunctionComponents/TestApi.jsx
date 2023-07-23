import { useEffect, useRef,useState } from "react"
import { 
    StyleSheet, 
    View,
    Button,
    TextInput,
    Text, 
    Alert, 
    Dimensions,
    useWindowDimensions, 
    Platform,
    Linking, 
    PixelRatio, 
    BackHandler, 
    PermissionsAndroid, 
    Vibration, 
    ToastAndroid,
    Keyboard  } from "react-native"
// Dimensions 获取屏幕的宽高 缩放比 和 字体信息 useWindowDimensions
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
export default () => {
    // const [dimensions, setDimensions] = useState({ window, screen });
    // const onChange = ({ window, screen }) => {
    //     setDimensions({ window, screen });
    // };
    // const hookWindow = useWindowDimensions()
    // useEffect(() => {
    //     // Dimensions.addEventListener("change", onChange);
    //     // return () => {
    //     //   Dimensions.removeEventListener("change", onChange);
    //     // };
    //     BackHandler.addEventListener("hardwareBackPress",backAction)
    //     return () => {
    //         BackHandler.removeEventListener("hardwareBackPress", backAction);
    //     }
    // });
    // const backAction = () => {
    //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //       {
    //         text: "Cancel",
    //         onPress: () => null,
    //         style: "cancel"
    //       },
    //       { text: "YES", onPress: () => BackHandler.exitApp() }
    //     ]);
    //     return true;
    //   };    
    // console.log(Platform,'Platform')
    // const s1 = {
    //     fontSize:18
    // }
    // const s2 = {
    //     fontSize:20,
    //     color:'red'
    // }
    // const composeStyle = StyleSheet.compose(s1,s2)
    // console.log(composeStyle,'composeStyle')
    // const flattonStyle = StyleSheet.flatten([s1,s2])
    // console.log(flattonStyle,'flattonStyle')
    // console.log(StyleSheet.absoluteFill)
    // console.log(StyleSheet.hairlineWidth)
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    
    const _keyboardDidShow = () => {
    alert("Keyboard Shown");
    };
    
    const _keyboardDidHide = () => {
    alert("Keyboard Hidden");
    };    
    return (
        <View style={styles.root}>
            {/* <Button // button组件使用简单 但是不
                title="按钮" 
                color={'green'}
                onPress={() => {
                    // console.log('onpress.............')
                    // alert(false) // js的弹窗
                    // Alert.alert("这是标题",'这是一个提示信息',      [
                    //     {
                    //       text: "Cancel",
                    //       onPress: () => console.log("Cancel Pressed"),
                    //       style: "cancel"
                    //     },
                    //     { text: "OK", onPress: () => console.log("OK Pressed") }
                    //   ]) // rn的弹窗
                    // Alert.prompt('这是标题','这是一个提示信息',[
                    //     {
                    //         text: "Cancel",
                    //         onPress: () => console.log("Cancel Pressed"),
                    //         style: "cancel"
                    //     },
                    //     { text: "OK", onPress: () => console.log("OK Pressed") }
                    // ],'plain-text','heheh')
                    // console.log('普通日志输出');
                    // console.info('信息日志输出');
                    // console.debug('调试日志输出');
                    // console.warn('警告日志输出');
                    // console.error('错误日志输出');
                    // console.log('我是个人开发者%s，我学习rn%d年半了','黄虎',2)
                    // console.log('我是一个对象:%o',{name:'黄虎',age:12})
                    // console.log('%c字号大','color:red;font-size:x-large')
                    // const viewLayout = (
                    //     <View style={{ flexDirection:'column' }}>
                    //         <Text style={{ fontSize:20,color:'red' }}>
                    //             文字显示
                    //         </Text>
                    //     </View>
                    // )
                    // console.log(viewLayout)
                    // const users = [{
                    //     name:'huanghu',
                    //     age:18
                    // },{
                    //     name:'huanghu',
                    //     age:18                        
                    // }]
                    // console.table(users)

                    // console.group()
                    // console.log('第一行日志')
                    // console.log('第二行日志')
                    // console.log('第三行日志')
                    //     console.group()
                    //         console.log('第一行日志')
                    //         console.log('第二行日志')
                    //         console.log('第三行日志')
                    //     console.groupEnd()
                    // console.groupEnd()                        


                    // dimensions 获取屏幕的宽高 缩放比列 屏幕密度
                    // const { width,height,scale,fontScale } = Dimensions.get('window') // 不包含状态栏高度 
                    // const {  width,height,scale,fontScale } = Dimensions.get('screen') // 包含状态栏高度
                    // console.log('width:',width,'height:',height,'scale:',scale,'fontscale:',fontScale)
                    // if(Linking.canOpenURL("https://www.baidu.com/")){
                    //     Linking.openURL("https://www.baidu.com/")
                    // } // 跳转连接
                    // Linking.openURL("geo:37.484847,-122.148386") // 跳转地理位置
                    // Linking.openURL('tel:10086') // 跳转电话
                    // Linking.openURL('smsto:10086') // 跳转短信
                    // Linking.openURL('mailto:10086@qq.com') // 跳转邮箱
                    // Linking.openURL('dagongjue://demo?name=张三')
                    // Linking.openSettings()
                    // if(Platform.OS === 'android'){
                    //     Linking.sendIntent('com.dagongjue.demo.test',[{key:'name',value:'张三'}])
                    // }
                    // console.log(Linking.getInitialURL())

                    // console.log(PixelRatio.get())
                    // console.log(PixelRatio.getFontScale())
                    // console.log(PixelRatio.getPixelSizeForLayoutSize(200))
                    // const needPermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                    // PermissionsAndroid.check(
                    //     needPermission
                    // ).then(res => {
                    //     if(!res){
                    //         PermissionsAndroid.request(needPermission).then(status => {
                    //             console.log(status)
                    //             if(status === 'granted'){
                    //                 console.log('获得')
                    //             }else if(status === 'denied'){
                    //                 console.log('拒绝')
                    //             }
                    //         })
                    //     }
                    // })
                    // Vibration.vibrate()
                    // ToastAndroid.show('这是一个提示',ToastAndroid.SHORT)
                }}
                // disabled
            ></Button>        */}
            {/* <View 
                style={[
                    {
                        width:100,
                        height:100,
                        backgroundColor:'#3050ff',
                        marginTop:60,
                        marginLeft:60
                    },
                    {
                        transform:[{
                            // translateX:200
                            // translateY:200
                            // scaleX:1.5,
                            // scaleY:1.5
                            // rotateX:'45deg'
                            // rotateY:'45deg'
                            rotateZ:'45deg'
                        },{
                            scaleY:1.5
                        }]
                    }
                ]

                }
            ></View> */}
            <TextInput style={{
                width:'100%',
                height:40,
                backgroundColor:'#E0E0E0'
            }} placeholder='Click here ...' onSubmitEditing={Keyboard.dismiss} ></TextInput>
            {/* <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
            <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>  
            <Text>{ `${JSON.stringify(dimensions.window)}` }</Text>
            <Text>{ `${JSON.stringify(dimensions.screen)}` }</Text>
            <Text>{ `${JSON.stringify(hookWindow)}` }</Text>           */}
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    button:{
        width:300,
        height:40,
        backgroundColor:'blue',
        // textAlign:'center',
        // textAlignVertical:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        color:'#fff',
        fontSize:20 ,
        fontWeight:'bold'
    }    
})
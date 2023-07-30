import { useRef } from "react"
import {
    StyleSheet,
    View,
    Button,
    Animated,
    Easing
} from "react-native"


export default () => {
    const marginLeft = useRef(new Animated.Value(0)).current
    // 平移还可以有很多属性 比如translateX translateY left right top bottom 
    return (
        <View style={styles.root}>
            <Button title="按钮" onPress={() => {
                // Animated.timing(marginLeft,{
                //     toValue:200,
                //     duration:1000,
                //     useNativeDriver:false,
                // }).start();
                Animated.spring(marginLeft,{
                    toValue:200,
                    duration:500,
                    // easing:Easing.back(3) // 回拉
                    // easing:Easing.ease // 平缓
                    // easing:Easing.bounce // 弹跳
                    // easing: Easing.elastic(3) // 弹性
                    // easing:Easing.linear // 线性
                    // easing:Easing.quad // 二次函数
                    // easing:Easing.cubic // 三次函数
                    // easing:Easing.bezier(0.7,0.2,0.42,0.82) // 贝塞尔曲线
                    // easing: Easing.circle
                    // easing: Easing.sin
                    // easing: Easing.exp
                    // easing: Easing.in(Easing.bounce),
                    easing: Easing.inOut(Easing.elastic(1)),
                    useNativeDriver:false,                    
                }).start();
            }}></Button>
            <Animated.View
                style={[
                    styles.view,
                    {marginLeft:marginLeft}
                ]}
            >

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    view:{
        width:100,
        height:100,
        backgroundColor:'#3050ff',
        marginTop:20
    }
})
import { useRef } from "react"
import {
    StyleSheet,
    View,
    Button,
    Animated
} from "react-native"


export default () => {
    const marginLeft = useRef(new Animated.Value(0)).current
    // 平移还可以有很多属性 比如translateX translateY left right top bottom 
    return (
        <View style={styles.root}>
            <Button title="按钮" onPress={() => {
                Animated.timing(marginLeft,{
                    toValue:200,
                    duration:1000,
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
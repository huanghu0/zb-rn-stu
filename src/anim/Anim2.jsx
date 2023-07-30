import { useRef } from "react"
import {
    StyleSheet,
    View,
    Button,
    Animated
} from "react-native"


export default () => {
    // const rotate = useRef(new Animated.Value(0)).current
    // const rotateValue = rotate.interpolate({
    //     inputRange:[0,30],
    //     outputRange:['0deg','30deg']
    // })
    // const scale = useRef(new Animated.Value(1)).current
    const opacity = useRef(new Animated.Value(1)).current
    return (
        <View style={styles.root}>
            <Button title="按钮" onPress={() => {
                Animated.timing(opacity,{
                    toValue:0.1,
                    duration:1000,
                    useNativeDriver:false,
                }).start();
            }}></Button>
            <Animated.View
                style={[
                    styles.view,
                    {
                        transform:[
                            // { 
                                // rotate:rotateValue
                                // scale:scale 

                            // }
                         ]
                    },
                    { opacity:opacity }
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
        marginTop:60,
        marginLeft:60
    }
})
import { useEffect, useRef } from "react"
import { StyleSheet, View,TouchableOpacity,Text } from "react-native"

export default () => {
    const inputRef = useRef(null)
    // useEffect(() => {
    //     setTimeout(() => {
    //         // inputRef.current.focus()
    //         inputRef.current.blur()
    //     },2000)
    // })
    return (
        <View style={styles.root}>
            <TouchableOpacity // 点击组件 里面没有东西和view一致
                style={styles.button}
                activeOpacity={0.5} // x ~ 1不透明度变化范围
                onPress={() => {
                    console.log('点击事件...')
                }}
                onLongPress={() => {
                    console.log('长按事件...')
                }}
                delayLongPress={1000} // 算长按的时间
                onPressIn={() => {
                    console.log('点击按下............')
                }}
                onPressOut={() => {
                    console.log('点击抬起............')
                }}
            >
                <Text style={styles.txt}>按钮</Text>
            </TouchableOpacity>
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
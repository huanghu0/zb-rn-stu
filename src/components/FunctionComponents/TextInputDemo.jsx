import { useEffect, useRef } from "react"
import { StyleSheet, View,TextInput } from "react-native"

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
            <TextInput // 文本输入
                ref={inputRef}
                style={styles.input}
                autoFocus={false}
                // blurOnSubmit={true} // 失焦
                // caretHidden={false} // 光标隐藏
                defaultValue="默认内容"
                editable={true} // 是否可编辑
                keyboardType='number-pad' // 键盘类型
                returnKeyType="send" // 决定键盘确定按钮的内容
                // maxLength={11} // 最大长度
                // multiline={true} // 允许多行输入
                // numberOfLines={2} // 只显示2行
                onBlur={() => {
                    console.log('失去焦点时回调')
                }}
                onFocus={() => {
                    console.log('聚焦时回调')
                }}
                onChange={(event) => {
                    console.log(event.nativeEvent,'内容回调 拿到原生dom')
                }}
                onChangeText={(text) => {
                    console.log(text,'内容改变回调 拿到文本')
                }}
                // selection={{start:0,end:3}} // 选中相关
                selectionColor={'red'}
                selectTextOnFocus={true}
                secureTextEntry={true} // 安全输入模式 如输入密码 不能和multiline 连用
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    input:{
        width:'100%',
        height: 56,
        backgroundColor:'#D0D0D0',
        fontSize:24,
        color:'#333333',
        fontWeight:'bold',
        textAlign:'left',// 水平对齐方式
        textAlignVertical:'top', // 垂直对齐方式
    }
})
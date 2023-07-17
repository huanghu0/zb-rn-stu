import { useEffect, useRef } from "react"
import { StyleSheet, View,Text } from "react-native"

export default () => {

    return (
        <View style={styles.root}>
            <Text 
                style={styles.txt} 
                // numberOfLines={1} // 一行展示
                // ellipsizeMode="head" // 超出展示...的位置
                // selectable={true} // 支持选中
                // selectionColor='#1876ff' // 设置选中的颜色
                // onPress={() => console.log('onPress .............')} // 点击
                // onLongPress={() => console.log('onLongPress............')} // 长按
                // allowFontScaling={false} // 字体大小跟随系统设置
            >
                本次期末考试不及格的人数
                <Text style={styles.innerTxt}>8</Text>
                人。
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    txt:{
        fontSize:20,
        color:'#3025ff',
        backgroundColor:'gray',
        textAlign:'center', // 文字水平对齐
        textAlignVertical:'center', // 文字垂直对齐
        height:300,
        width:300,
        textDecorationStyle:'solid', // 文本装饰器
        textDecorationLine:'underline', // 文本装饰线
        textShadowColor:'#3025ff', // 文字阴影颜色
        textShadowOffset:{width:2,height:4}, // 阴影偏移
        textShadowRadius:8, // 阴影圆角
    },
    innerTxt:{
        fontSize: 30,
        color:'#ff3025'
    }
})
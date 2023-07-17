import { useEffect, useRef } from "react"
import { StyleSheet, View } from "react-native"

export default () => {
    const subviewref = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            // setNativeProps 性能瓶颈下修改原生属性的选择余地
            subviewref.current.setNativeProps({
                style:{backgroundColor:'blue'}
            })
        },2000)
    },[])
    return (
        <View style={styles.root}>
            <View 
                ref={subviewref}
                style={styles.subview}
                onLayout={(event) => console.log(event.nativeEvent,'布局信息的回调')}
            ></View>
            <View style={styles.subview}></View>
            <View style={styles.subview}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'column',
        width:'100%',
        height:'100%',
        backgroundColor:'#c0c0c0',
        // alignItems:'center',
        // justifyContent:'center'
    },
    subview:{
        width:100,
        height:100,
        marginTop:10,   
        backgroundColor:'red'
    }
})
import { useEffect, useRef } from "react"
import { StyleSheet, View,ImageBackground,Text } from "react-native"
import ImageDemo from '../../assets/images/imagedemo.jpeg' 
// import Setting from '../../assets/images/setting.png'

export default () => {

    const viewref = useRef(null);
    const imageRef = useRef(null);
    // ImageBackground 是view 和 image组件的结合
    return (
        <View style={styles.root}>
            <ImageBackground 
                style={styles.viewStyle}
                imageStyle={styles.imageStyle}
                source={ImageDemo}
                ref={viewref}
                imageRef={imageRef}
            > 
                <Text>ImageBackground</Text>
            </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        // backgroundColor:'#F0F0F0'
        flexDirection:'column'
    },
    viewStyle:{
        width:'100%',
        height:150,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    imageStyle:{
        resizeMode:'cover',
        borderRadius:12,
    }
})
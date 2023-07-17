import { useEffect, useRef } from "react"
import { StyleSheet, View,Button,Text } from "react-native"

export default () => {

    return (
        <View style={styles.root}>
            <Button // button组件使用简单 但是不
                title="按钮" 
                color={'green'}
                onPress={() => {
                    console.log('onpress.............')
                }}
                // disabled
            ></Button>       
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
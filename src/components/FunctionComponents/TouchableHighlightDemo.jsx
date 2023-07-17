import { useEffect, useRef } from "react"
import { StyleSheet, View,TouchableHighlight,Text } from "react-native"

export default () => {

    return (
        <View style={styles.root}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => {
                    console.log('onpress......')
                }}
                underlayColor={"#00bcd4"}
            >
                <Text style={styles.txt}>
                    按钮
                </Text>
            </TouchableHighlight>
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
import { useEffect, useRef } from "react"
import { StyleSheet, View,Pressable,Text } from "react-native"

export default () => {

    return (
        <View style={styles.root}>
            <Pressable
                // style={styles.button}
                style = {(state) => {
                    const { pressed } = state;
                    return {
                        width:300,
                        height:65,
                        backgroundColor: pressed ? 'white':'#2030FF',
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center',
                    }
                }}
            >
                {
                    (state) => {
                        const { pressed } = state;
                        return (
                            <Text style={pressed ? styles.pressTxt : styles.txt}>按钮</Text>    
                        )
                    }
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        alignItems:'center'        
    },
    button:{
        width:300,
        height:40,
        backgroundColor:'blue',
        // textAlign:'center',
        // textAlignVertical:'center',
    },
    txt:{
        color:'#fff',
        fontSize:20 ,
        fontWeight:'bold'
    },
    pressTxt:{
        color:'#2030FF',
        fontSize:20 ,
        fontWeight:'bold'        
    }    
})
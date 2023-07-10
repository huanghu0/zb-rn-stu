import React,{ useEffect, useRef, useState } from "react";

const { View,Text,ScrollView, useWindowDimensions, useColorScheme } = require("react-native");

export default function FunctionView () {

    const [address,setAddress]  = useState('上海市')

    const scrollViewRef = useRef(null)

    const { width,height } = useWindowDimensions();

    const colorScheme = useColorScheme()
    console.log('colorScheme:',colorScheme)

    useEffect(() => {
        setTimeout(() => {
            setAddress('杭州市');
            scrollViewRef.current.scrollToEnd({animted:true})
        },2000)
    },[])



    return (
        <View style={{  width:200,height:200,backgroundColor:'blue'}}>
            <Text>{ address }</Text>
            <ScrollView ref={scrollViewRef}>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>BBB</Text>
                <Text>BBB</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>AAA</Text>
                <Text>BBB</Text>
                <Text>BBB</Text>                         
            </ScrollView>
            <Text>{width},{height}</Text>
        </View>
    )
}
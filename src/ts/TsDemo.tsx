import React from "react";
import {
    View,
    Button
} from 'react-native';

export default () => {
    const onButtonPress: () => void = () => {
        const a:number = 123;
        console.log(a)
        const arg: number | string = '1';
        console.log(arg)
        const name: string | undefined | null = null
        console.log(name)
        type user = {
            name?: string,
            age?: number,
            speak?:() => void
        }
        const u:user | undefined = {}
        u?.speak?.()
    }
    return (
        <View>
            <Button 
                title="按钮"
                onPress={onButtonPress}
            ></Button>
        </View>
    )
}
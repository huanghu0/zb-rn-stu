import React from "react";
import { View } from "react-native";
 
export default class ClassView extends React.Component {
    constructor(props){
        super(props)
        console.log('constructor..............')
    }

    componentDidMount(){
        console.log('componentDidMount...................')
    }

    render() {
        const { name,age } = this.props
        console.log('render................','name=',name,'age=',age)
        return (
            <View style={{ width:200,height:200,backgroundColor:'red' }}>

            </View>
        )
    }
}
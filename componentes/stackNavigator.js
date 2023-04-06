import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Iss_location from "../screens/iss_location";
import Meteor from "../screens/meteor";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name = "Home" component = {Home}/>
                <Stack.Screen name = "Iss_location" component = {Iss_location}/>
                <Stack.Screen name = "Meteor" component = {Meteor}/>
            </Stack.Navigator>
        )
    }
}

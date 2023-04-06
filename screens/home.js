import React, { Component } from "react";
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image} from "react-native"


const BGimg = require("../assets/bg.png")
const MeteorIcon = require("../assets/meteor_icon.png")
const ISSIcon = require("../assets/iss_icon.png")
export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source={BGimg} style = {styles.backgroundImage}>
                  <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>
                        Iss Tracker
                    </Text>
                  </View>
                  <TouchableOpacity style = {styles.routeCard} onPress={()=>this.props.navigation.navigate("Iss_location")}>
                    <Text style = {styles.routeText}>
                    Iss_location
                    </Text>
                    <Text style = {styles.knowMore}>
                    {"Saiba Mais->"}
                    </Text>
                    <Text style = {styles.bgDigit}>
                    1
                    </Text>
                    <Image source={ISSIcon} style = {styles.iconImage}/>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteor")}>
                    <Text style = {styles.routeText}>
                    Meteor
                    </Text>
                    <Text style = {styles.knowMore}>
                    {"Saiba Mais->"}
                    </Text>
                    <Text style = {styles.bgDigit}>
                    2
                    </Text>
                    <Image source={MeteorIcon} style = {styles.iconImage}/>
                  </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight: 0
    },
    backgroundImage:{
        flex: 1,
        resizeMode: "cover"
    },
    routeCard:{
        flew: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    titleBar:{
        flex: 0.15,
        justifyContent: "center",
        alignItens: "center",
    },
    titleText:{
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})


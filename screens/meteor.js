import React, { Component } from "react";
import {Text, View, StyleSheet, ImageBackground, Alert, Image} from "react-native"
import axios from "axios";

export default class Meteor extends Component{
    constructor(){
        super()
        this.state = {
            meteors:{}
        }
    }

    getMeteors = () => {
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=z5le0sK6r1YCCWhKIbENeZEhhkQs0sXKjAw7IUi1")
        .then(response => {
            this.setState({meteors:response.data.near_earth_objects})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getMeteors()
    }

    render(){
        if (Object.keys(this.state.meteors).length == 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            let meteorArr = Object.keys(this.state.meteors).map(meteorDate => {
                return this.state.meteors[meteorDate]
            })
            let meteors = [].concat.apply([], meteorArr)
            meteors.forEach(element => {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)/2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers)*1000000000
                element.threat_Score = threatScore
                
            });
            return(
                <View style = {styles.container}>
                    <Text>
                        meteor
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})


//z5le0sK6r1YCCWhKIbENeZEhhkQs0sXKjAw7IUi1
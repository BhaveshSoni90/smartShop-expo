import React from "react";
import { Text,ScrollView } from "react-native-gesture-handler";
const About = () =>{
    return(
        <>
        <ScrollView collapsable={false}>
            <Text>this is about page of my app</Text>
        </ScrollView>
        </>
    )
}

export default About;
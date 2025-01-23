import React from "react";
import { Text,ScrollView, PanGestureHandler } from "react-native-gesture-handler";
const About = () =>{
    return(
        <>
        <GestureHandlerRootView collapsable={false}>
            <PanGestureHandler>
            <Text>this is about page of my app</Text>
            </PanGestureHandler>
        </GestureHandlerRootView>
        </>
    )
}

export default About;
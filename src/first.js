import React from "react";
import { Text,ScrollView, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
const First = () =>{
    return(
        <>
        <GestureHandlerRootView>
        <ScrollView collapsable={false}>
        <PanGestureHandler>
            <Text>hello this is first screen</Text>
            </PanGestureHandler>
        </ScrollView>
        </GestureHandlerRootView>
        </>
    )
};

export default First;
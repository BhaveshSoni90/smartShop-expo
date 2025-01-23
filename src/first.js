import React from "react";
import { Text,ScrollView, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { Image } from "react-native";
import Category from "./Category";
const First = () =>{
    return(
        <>
        <GestureHandlerRootView>
        <ScrollView collapsable={false}>
        <PanGestureHandler>
            <Image source={{uri: 'https://m.media-amazon.com/images/I/51Id5Jjpm-L._SX1500_.jpg'}}
            style={{ width: 400, height: 200 }} 
            />
        </PanGestureHandler>
        <Category/>
        </ScrollView>
        </GestureHandlerRootView>
        </>
    )
};

export default First;
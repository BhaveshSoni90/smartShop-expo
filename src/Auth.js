import React from "react";
import { PanGestureHandler, GestureHandlerRootView } from "react-native-gesture-handler";
import { Text,ScrollView } from "react-native-gesture-handler";
const Login = () =>{
    return(
        <>
        <GestureHandlerRootView collapsable ={false}>
            <PanGestureHandler>
          <Text>this will be authentication page for login and signup</Text>
          </PanGestureHandler>
        </GestureHandlerRootView>
        </>
    )
}

export default Login;
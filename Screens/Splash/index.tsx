import React from "react";
import {View,Text} from "react-native";
import { stackNavigationProp } from "typeDefinition";



const splashScreen = ({navigation}:stackNavigationProp)=>
{      console.log(navigation.getState());
    return (
        <Text>This is Splash Screen</Text>
    );
}

export default splashScreen;
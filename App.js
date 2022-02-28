import { useRef, useState, useEffect } from "react";
import { Button, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import Navigation from "./Navigation/index";

import CameraScreen from "./Screens/CameraScreen/camerScreen";
import IndividualBird from "./Screens/IndividualBirdScreen/individualBird";
import UserLogin from "./Screens/SignInScreen/userLogin";
import SignUp from "./Screens/SignUpScreen /signUp";

export default function App() {
  

  return (
    <View style={styles.container}>
      {/* <SignUp /> */}
      {/* <UserLogin /> */}
      {/* <Navigation /> */}
      {/* <IndividualBird /> */}
      <CameraScreen></CameraScreen>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
 
    flex:1,

  },
});
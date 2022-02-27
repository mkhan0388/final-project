import { useRef, useState, useEffect } from "react";
import { Button, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import Navigation from "./Navigation/index";

import CameraScreen from "./Screens/CameraScreen/camerScreen";
import UserLogin from "./Screens/SignInScreen/userLogin";
import SignUp from "./Screens/SignUpScreen /signUp";

export default function App() {
  

  return (
    <View style={styles.container}>
      <SignUp />
      {/* <UserLogin /> */}
      {/* <Navigation /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // width: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
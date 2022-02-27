import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserLogin from "../Screens/SignInScreen/userLogin";
// import SignUp from "../Screens/HomeScreen/SignUp";
// import ForgotPassword from "../Screens/HomeScreen/ForgotPassword";
import HomeScreen from "../Screens/HomeScreen/homeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserLogin" component={UserLogin} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

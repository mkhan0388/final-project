import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/customButton/customButton";

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  

  const onSignUp = () => {
    console.warn("Account Created(Post request to server)");
  };

  const onLoginPage = () => {
    console.warn("Navigate to login page");
  };
  /*
  if user_id !== Num {
      
  }
  */

  return (
    <View style={styles.root}>
      <Text>Create an account</Text>
      <CustomInput
        placeholder="Nickname"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
         <CustomInput
        placeholder="Repeat Password"
        value={repeatPassword}
        setValue={setRepeatPassword}
        secureTextEntry={true}
      />

      <CustomButton text={"Sign Up"} onPress={onSignUp} />
     
      <CustomButton
        text="Already Have an account? Click here to login"
        onPress={onLoginPage}
        type="TERTIARY"
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'black'
  }
});

export default SignUp;

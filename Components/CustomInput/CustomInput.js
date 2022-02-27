import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useRef, useState, useEffect } from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        style={styles.text}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "baseline",
    width: 100,
    marginHorizontal: 100,
  },
  container: {
    backgroundColor: "grey",
    width: "100%",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 1,
    
  },
});

export default CustomInput;

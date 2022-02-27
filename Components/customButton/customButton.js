import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: "blue",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "gray",
  },
});
export default CustomButton;

import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  // ImagePropTypes,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    backgroundColor: Colors.white,
    padding: 15,
    borderColor: Colors.border,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: Colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    color: Colors.textLight,
  },
  containerDisabled: {
    backgroundColor: Colors.offWhite,
  },
});


export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    // stopped at disabled input 3 28
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

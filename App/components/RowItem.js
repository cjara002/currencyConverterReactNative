import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
// import {Entypo} from "@expo/vector-icons";
import colors from "../constants/Colors";



const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      text: {
          fontSize: 16,
          color: colors.text
      },
      separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
          }
  });

export const RowItem = ({ rightIcon, text, onPress}) => {
    return(
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{ text }</Text>
        {/* <Entypo name="chevron-right" size={20} /> */}
        {rightIcon}
      </TouchableOpacity>
    )
}

export const RowSeparator = () => {
    return(
      <View style={styles.separator} />
    )

}
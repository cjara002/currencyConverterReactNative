import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import {Entypo} from "@expo/vector-icons";
import colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = url => {
   return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry something went wrong.")
  })
}
export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView> 
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
      }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() => openUrl("https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter")}
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
      }
        />

        <RowSeparator />

        <RowItem
          text="React Native By Example"
          onPress={() => openUrl("https://reactnativebyexample.com")}
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
      }
        />

      </ScrollView>
    </SafeAreaView>
  );
};


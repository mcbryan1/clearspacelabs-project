import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
LogBox.ignoreAllLogs();
import {
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";


export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    SemiBold: Quicksand_600SemiBold,
    Bold: Quicksand_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <DrawerNavigation />;
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

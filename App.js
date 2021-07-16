import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
LogBox.ignoreAllLogs();

export default function App() {
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

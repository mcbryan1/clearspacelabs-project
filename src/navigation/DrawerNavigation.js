import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors, dimensions } from "../constants";
import Assessments from "../views/screens/Assessments/Assessments";
import ConditionLibrary from "../views/screens/ConditionLibrary/ConditionLibrary";

const Drawer = createDrawerNavigator();

function DrawerNavigation(navigation) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        drawerType="slide"
        edgeWidth={100}
        drawerStyle={{
          backgroundColor: colors.gray,
          width: dimensions.width.lg,
        }}
      >
        <Drawer.Screen name="assessment" component={Assessments} />
        <Drawer.Screen name="condition" component={ConditionLibrary} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigation;

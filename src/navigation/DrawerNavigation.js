import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors, dimensions } from "../constants";
import Assessments from "../views/screens/Assessments/Assessments";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function DrawerNavigation(navigation) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        drawerPosition="right"
        drawerType="slide"
        drawerStyle={{
          backgroundColor: colors.gray,
          width: dimensions.width.lg +10,
        }}
        overlayColor={colors.whiteOverlay}
      >
        <Drawer.Screen name="assessment" component={Assessments} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigation;

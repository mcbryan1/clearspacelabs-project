import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.topContainerSpace}></View>
      <DrawerContentScrollView {...props}>
        <View style={styles.bottomContainerSpace}>
          <DrawerItem
            icon={() => (
              <AntDesign name="stepforward" size={24} color="black" />
            )}
            label="My Wall"
            onPress={() => {
              props.navigation.navigate("assessment");
            }}
          />
          <DrawerItem label="My Wall" />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

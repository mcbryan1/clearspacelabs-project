import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContent,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const CustomDrawer = ({ navigation, props }) => {
  const toggleDrawer = () => {
    navigation.closeDrawer();
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.subDrawerContainer}>
        <View style={styles.topContainerSpace}></View>
        <DrawerContentScrollView {...props}>
          <View style={styles.bottomContainerSpace}>
            <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  name="restart"
                  style={styles.labelIcon}
                />
              )}
              label={() => <Text style={styles.labelText}>Start</Text>}
            />
            <DrawerItem
              icon={() => (
                <AntDesign
                  name="user"
                  style={styles.labelIcon1}
                />
              )}
              label={() => <Text style={styles.labelText}>Profiles</Text>}
            />
             <DrawerItem
              icon={() => (
                <AntDesign
                  name="database"
                  style={styles.labelIcon2}
                />
              )}
              label={() => <Text style={styles.labelText}>Assessments</Text>}
            />
            <DrawerItem
              icon={() => (
                <Ionicons
                  name="book-outline"
                  style={styles.labelIcon3}
                />
              )}
              label={() => <Text style={styles.labelText}>Condition Library</Text>}
            />
            <DrawerItem
              icon={() => (
                <MaterialIcons
                  name="track-changes"
                  style={styles.labelIcon2}
                />
              )}
              label={() => <Text style={styles.labelText}>Symptom tracking</Text>}
            />
            <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  name="cog-outline"
                  style={styles.labelIcon}
                />
              )}
              label={() => <Text style={styles.labelText}>Settings</Text>}
            />
          </View>
        </DrawerContentScrollView>
        <View>
          <TouchableOpacity onPress={toggleDrawer}>
            <Feather name="x" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

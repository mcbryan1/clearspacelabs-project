import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ConditionLibrary = ({navigation}) => {
  const toggleDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>Condition Library</Text>
      <TouchableOpacity onPress={toggleDrawer} style={styles.button}>
          <Text>Condition Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConditionLibrary;

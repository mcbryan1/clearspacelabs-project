import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles";
import logo from "../../../../assets/images/logo.png";

const Assessments = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Ada provides a general symptom assessment, whatever your symptoms
            and will consider Covid -19 where relevant. For up-to-date guidance
            specific to Covid -19, please use the WHO website.
          </Text>
          <Text style={styles.empty}></Text>
        </View>
      </View>
    </View>
  );
};

export default Assessments;

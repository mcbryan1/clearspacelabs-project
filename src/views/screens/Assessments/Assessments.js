import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import logo from "../../../../assets/images/logo.png";
import textLogo from "../../../../assets/images/logoName.png";
import FlatButton from "../../components/button/button";
import { Ionicons } from "@expo/vector-icons";

const Assessments = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.openDrawer();
  };
  const openLink = () => {
    Linking.openURL(
      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=CjwKCAjw3MSHBhB3EiwAxcaEu3HD94okHp5jNGgCvbfJI0s4lf551re2LjOtTXj3MooA6n_VcI7fKRoCtaoQAvD_BwE"
    );
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
        <View style={styles.buttonContainer}>
          <FlatButton
            text="Learn more on the WHO website"
            onPress={openLink}
          />
          <FlatButton
            text="Continue using Ada"
            onPress={() => alert("You Just Continued")}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Image style={styles.textLogo} source={textLogo} />
          <TouchableOpacity onPress={toggleDrawer}>
            <Ionicons name="menu-outline" style={styles.toggler} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Assessments;

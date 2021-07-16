import { StyleSheet } from "react-native";
import { colors, dimensions } from "../constants";

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: "column",
  },
  subDrawerContainer: {
    flex: 10,
  },
  topContainerSpace: {
    flex: 1,
  },
  bottomContainerSpace: {
    flex: 9,
    marginTop: dimensions.margin.lg,
  },
  closeIcon: {
    fontSize: dimensions.font.xl,
    color: colors.darkGray,
    marginVertical: dimensions.margin.lg,
    marginHorizontal: dimensions.margin.lg,
    alignSelf: "flex-end",
    color: colors.darkGray,
  },
  labelIcon:{
    fontSize: dimensions.font.lg - 3,
    color: colors.lightGreen,    
  },
  labelIcon1:{
    fontSize: dimensions.font.lg - 3,
    color: colors.red,
  },
  labelIcon2:{
    fontSize: dimensions.font.lg - 3,
    color: colors.seaBlue,
  },
  labelIcon3:{
    fontSize: dimensions.font.lg - 3,
    color: colors.yellow,
  },
  labelText: {
    color: colors.darkGray,
    fontFamily: 'Regular',
    fontSize: dimensions.font.sm,
  }
});

export default styles;

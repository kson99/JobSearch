import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },

  footerConatiner: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    marginTop: SIZES.medium,
  },

  pagers: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  pagersIcons: {
    color: "#fff",
  },

  pageIndicator: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  pageIndicatorText: {
    fontSize: 20,
  },
});

export default styles;

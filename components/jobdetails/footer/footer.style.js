import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
  },

  applyBtn: {
    height: 55,
    flex: 1,
    backgroundColor: "#FE7654",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
  },

  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  searchQuery: {
    color: "grey",
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationButton: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationIcon: {
    color: "#fff",
  },
  paginationTextBox: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;

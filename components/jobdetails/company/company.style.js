import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },

  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },

  logoImage: {
    width: "80%",
    height: "80%",
  },

  jobTitleBox: {
    marginTop: SIZES.small,
  },

  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },

  companyInfoBox: {
    marginTop: SIZES.xxSmall,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },

  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  locationIcon: {
    color: COLORS.gray,
  },

  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },

  websiteBox: (website) => ({
    display: website === null ? "none" : "flex",
    marginVertical: SIZES.xxSmall,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 7,
  }),

  jobType: {
    paddingTop: 7,
    color: COLORS.primary,
  },

  webBoxItems: {
    color: COLORS.primary,
  },

  dates: {
    marginTop: 10,
    flexDirection: "row",
    color: "grey",
  },

  datesText: {
    color: "grey",
  },
});

export default styles;

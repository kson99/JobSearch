import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import styles from "./company.style";
import { checkImageUrl } from "../../../utils";
import { icons } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
  website,
  datetime,
  due,
  jobType,
}) => {
  const getDate = (dt) => {
    const date = new Date(dt);

    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageUrl(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
        </View>
        <Text style={styles.locationName}>{location}</Text>
      </View>

      <TouchableOpacity
        style={styles.websiteBox(website)}
        onPress={() => Linking.openURL(website)}
      >
        <Ionicons name="globe" size={20} style={styles.webBoxItems} />
        <Text style={styles.webBoxItems}>{website}</Text>
      </TouchableOpacity>

      <Text style={styles.jobType}>{jobType}</Text>

      <View style={styles.dates}>
        <Text style={styles.datesText}>Posted: {getDate(datetime)}</Text>
        <Text> / </Text>
        <Text style={styles.datesText}>
          Due date: {due === "null" ? "Not Listed" : getDate(due)}
        </Text>
      </View>
    </View>
  );
};

export default Company;

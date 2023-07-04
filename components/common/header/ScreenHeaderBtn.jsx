import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./screenheader.style";
import { Ionicons } from "@expo/vector-icons";

const ScreenHeaderBtn = ({ name, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Ionicons name={name} size={dimension} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, seletedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(seletedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(seletedJob, item)}>
        <Image
          source={{ uri: item?.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(seletedJob, item)}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

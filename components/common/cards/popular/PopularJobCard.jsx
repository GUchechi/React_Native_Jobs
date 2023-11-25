import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, seletedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(seletedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(seletedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
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

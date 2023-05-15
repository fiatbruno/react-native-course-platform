import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./popularcoursecard.style"

const PopularCourseCard = ({
    item,
    selectedCourse,
    handleCardPress,
}) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedCourse, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity
                style={styles.logoContainer(selectedCourse, item)}
            >
                <Image
                    source={{ uri: item.employer_logo }}
                    resizeMode="contain"
                    style={styles.logoImage}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>
            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedCourse, item)} numberOfLines={1}>{item.job_title}</Text>
                <Text style={styles.location}> {item.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularCourseCard

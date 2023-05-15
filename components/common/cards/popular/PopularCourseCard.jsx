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
        </TouchableOpacity>
    )
}

export default PopularCourseCard

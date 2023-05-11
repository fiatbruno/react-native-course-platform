import React from "react"
import { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native"
import { useRouter } from "expo-router"
import PopularCourseCard from "../../common/cards/popular/PopularCourseCard"

import styles from "./popularcourses.style"
import { COLORS, SIZES } from "../../../constants"

const Popularjobs = () => {
    const router = useRouter()
    const isLoading = false
    const error = false
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularjobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View>
                {isLoading ? (
                    <ActivityIndicator
                        size={SIZES.large}
                        color={COLORS.primary}
                    ></ActivityIndicator>
                ) : error ? (
                    <Text>There is a problem</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => (
                            <PopularCourseCard
                                item={item}
                            ></PopularCourseCard>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{
                            columnGap: SIZES.medium,
                        }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default Popularjobs

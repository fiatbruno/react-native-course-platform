import { useEffect, useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native"
import { useRouter } from "expo-router"
import PopularCourseCard from "../../common/cards/popular/PopularCourseCard"
import useFetch from "../../../hook/useFetch"

import styles from "./popularcourses.style"
import { COLORS, SIZES } from "../../../constants"

const Popularcourses = () => {
    const router = useRouter()
    const { data, isLoading, error } = useFetch("course-names")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularcourses</Text>
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

export default Popularcourses

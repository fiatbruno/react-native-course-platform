import { useState } from "react"
import { useRouter } from "expo-router"
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native"

import styles from "./welcome.style"
import { icons, SIZES } from "../../../constants"

const courseTypes = [
    "Crypto",
    "Web3 Coding",
    "Personal Brand",
    "Dating",
    "Life Setup",
]

const Welcome = () => {
    const router = useRouter()
    const [activeCourseType, setActiveCourseType] =
        useState("Web3 Coding")

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Yoo! Absolute</Text>
                <Text style={styles.welcomeMessage}>
                    Expand your education
                </Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onChange={() => {}}
                        placeholder="What do you want to learn?"
                    />
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => {}}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={courseTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeCourseType, item)}
                            onPress={() => {
                                setActiveCourseType(item)
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text
                                style={styles.tabText(
                                    activeCourseType,
                                    item
                                )}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                ></FlatList>
            </View>
        </View>
    )
}

export default Welcome

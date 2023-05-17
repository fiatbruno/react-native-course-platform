import {
    Text,
    View,
    SafeAreaView,
    RefreshControl,
    ScrollView,
    ActivityIndicator,
} from "react-native"
import { useRouter, Stack, useSearchParams } from "expo-router"
import { useCallback, useState } from "react"
import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics,
} from "../../components"
import { SIZES, icons, COLORS } from "../../constants"
import useFetch from "../../hook/useFetch"

const JobDetails = () => {
    const params = useSearchParams()
    const router = useRouter()

    const { data, isLoading, error, refetch } = useFetch(
        "job-details",
        {
            job_id: params.id,
        }
    )
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {}
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        >
            {/* <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: "",
                }}
            ></Stack.Screen> */}

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        ></RefreshControl>
                    }
                ></ScrollView>
            </>
        </SafeAreaView>
    )
}

export default JobDetails

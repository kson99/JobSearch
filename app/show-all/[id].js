import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { useEffect, useState } from "react";
import { NearbyJobCard, ScreenHeaderBtn } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/show-all";
import { RAPID_API_KEY1 } from "@env";
import axios from "axios";

const ShowAll = () => {
  const [jobsError, setJobsError] = useState();
  const [jobsLoader, setJobsLoader] = useState(false);
  const [popularJobs, setPopularJobs] = useState([]);
  const [page, setPage] = useState(1);

  const router = useRouter();
  const params = useSearchParams();

  const getPopularJobs = async () => {
    setJobsLoader(true);
    setPopularJobs([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY1,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: "developer, namibia",
          page: page.toString(),
          num_pages: 2,
        },
      };

      const response = await axios.request(options);
      setPopularJobs(response.data.data);
    } catch (error) {
      setJobsError(error);
      console.log(error);
    } finally {
      setJobsLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      getPopularJobs();
    } else if (direction === "right") {
      setPage(page + 1);
      getPopularJobs();
    }
  };

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  useEffect(() => {
    getPopularJobs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: params.id,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              name="chevron-back"
              dimension={30}
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          // <ShowAllJobsCard item={item} handlePress={handleCardPress} />
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{
          paddingHorizontal: SIZES.medium,
          rowGap: SIZES.medium,
        }}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            {jobsLoader ? (
              <ActivityIndicator size={"large"} color={COLORS.primary} />
            ) : (
              jobsError && <Text>Oops something went wrong</Text>
            )}
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerConatiner}>
            <TouchableOpacity
              style={styles.pagers}
              onPress={() => handlePagination("left")}
            >
              <Ionicons
                name="chevron-back"
                size={25}
                style={styles.pagersIcons}
              />
            </TouchableOpacity>

            <View style={styles.pageIndicator}>
              <Text style={styles.pageIndicatorText}>{page}</Text>
            </View>

            <TouchableOpacity
              style={styles.pagers}
              onPress={() => handlePagination("right")}
            >
              <Ionicons
                name="chevron-forward"
                size={25}
                style={styles.pagersIcons}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShowAll;

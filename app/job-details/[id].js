import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Share,
} from "react-native";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

const tabs = [
  "About",
  "Qualifications",
  "Responsibilities",
  "Benefits",
  "Skills required",
];

function JobDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error, reFetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    reFetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      case "Benefits":
        return (
          <Specifics
            title="Benefits"
            points={data[0].job_highlights?.Benefits ?? ["N/A"]}
          />
        );
      case "Skills required":
        return (
          <Specifics
            title="Skills required"
            points={data[0].job_required_skills ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  const shareClick = async () => {
    try {
      await Share.share({
        message: data[0]?.job_google_link,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              name="chevron-back"
              dimension={30}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              name="share-social-outline"
              dimension={30}
              handlePress={shareClick}
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
              website={data[0].employer_website}
              datetime={data[0].job_posted_at_datetime_utc}
              due={data[0].job_offer_expiration_datetime_utc ?? "null"}
              jobType={data[0].job_employment_type}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
}

export default JobDetails;

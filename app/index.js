import {
  View,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  Text,
} from "react-native";
import {
  ScreenHeaderBtn,
  Popularjobs,
  Welcome,
  Nearbyjobs,
} from "../components";
import { COLORS, SIZES, icons, images } from "../constants";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Job Search",
          headerTitleAlign: "center",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import Bottomnav from "@/components/Bottomnav";

import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.userSection}>
            <Image
              source={require("../../../assets/images/johndoe.png")}
              style={styles.profile}
            />

            <View>
              <Text style={styles.name}>John Doe</Text>

              <View style={styles.location}>
                <Ionicons
                  name="location-sharp"
                  size={15}
                  color="#FF7A45"
                />

                <Text style={styles.locationText}>
                  Brooklyn, New York
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.iconSection}>
            <Ionicons name="search-outline" size={24} color="#333" />
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#333"
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>

        {/* BANNER */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <Image
            source={require("../../../assets/images/banner1.png")}
            style={styles.banner}
          />
          <Image
            source={require("../../../assets/images/banner2.png")}
            style={styles.banner}
          />
          <Image
            source={require("../../../assets/images/banner3.png")}
            style={styles.banner}
          />
        </ScrollView>

        {/* CATEGORY */}
        <Text style={styles.heading}>Service Categories</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryCard}>
            <MaterialIcons name="local-car-wash" size={28} color="#FF7A45" />
            <Text style={styles.categoryText}>Express Wash</Text>
          </View>

          <View style={styles.categoryCard}>
            <FontAwesome5 name="car-side" size={24} color="#FF7A45" />
            <Text style={styles.categoryText}>Premium</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="sparkles-outline" size={28} color="#FF7A45" />
            <Text style={styles.categoryText}>Interior</Text>
          </View>

          <View style={styles.categoryCard}>
            <MaterialIcons name="build-circle" size={28} color="#FF7A45" />
            <Text style={styles.categoryText}>Engine</Text>
          </View>
        </ScrollView>

        {/* SERVICES */}
        <Text style={styles.heading}>Nearby Top Services</Text>

        {[
          {
            image: require("../../../assets/images/service1.png"),
            title: "Riverside Detailing",
          },
          {
            image: require("../../../assets/images/service2.png"),
            title: "Brookside Car Care",
          },
          {
            image: require("../../../assets/images/service3.png"),
            title: "Newburgh Auto Spa",
          },
          {
            image: require("../../../assets/images/service4.png"),
            title: "Newburgh Auto Spa",
          },
          {
            image: require("../../../assets/images/service5.png"),
            title: "Newburgh Auto Spa",
          },
          
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() =>
              router.push("/(tabs)/Home/stationdetail")
            }
          >
            <Image
              source={item.image}
              style={styles.serviceImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.serviceTitle}>
                {item.title}
              </Text>

              <View style={styles.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons
                    key={star}
                    name="star"
                    size={14}
                    color="#FFB000"
                  />
                ))}
              </View>
            </View>

            <Ionicons
              name="heart-outline"
              size={22}
              color="#FF7A45"
            />
          </TouchableOpacity>
        ))}

      </ScrollView>

      <Bottomnav />
    </SafeAreaView>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfb",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 45,
    paddingBottom: 10,
  },

  userSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  profile: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  locationText: {
    fontSize: 12,
    color: "gray",
    marginLeft: 4,
  },

  iconSection: {
    flexDirection: "row",
  },

  banner: {
    width: 310,
    height: 160,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 10,
  },

  categoryCard: {
    width: 110,
    height: 100,
    backgroundColor: "#FFF1E8",
    marginLeft: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    marginTop: 8,
    fontSize: 12,
  },

  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 12,
    borderRadius: 20,
    elevation: 4,
  },

  serviceImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 12,
  },

  serviceTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
});
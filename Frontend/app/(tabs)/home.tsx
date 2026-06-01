

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* FULL SCROLL */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}>

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.leftHeader}>
            <Image
              source={require("../../assets/images/johndoe.png")}
              style={styles.profileImage}
            />

            <View>
              <Text style={styles.userName}>John Doe</Text>

              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={16} color="#ff7b00" />
                <Text style={styles.locationText}>
                  Brooklyn, New York City
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Ionicons name="search-outline" size={24} color="#000" style={{ marginRight: 10 }} />
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </View>

        </View>

        {/* SWIPE CARDS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15, marginTop: 15 }}>

          <Image source={require("../../assets/images/banner1.png")} style={styles.banner} />
          <Image source={require("../../assets/images/banner2.png")} style={styles.banner} />
          <Image source={require("../../assets/images/banner3.png")} style={styles.banner} />

        </ScrollView>

        {/* CATEGORY TITLE */}
        <Text style={styles.title}>Service Category</Text>

        {/* CATEGORY SCROLL */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15 }}>

          <View style={styles.categoryBox}>
            <MaterialIcons name="local-car-wash" size={28} color="#ff7b00" />
            <Text>Express Wash</Text>
          </View>

          <View style={styles.categoryBox}>
            <FontAwesome5 name="car-side" size={24} color="#ff7b00" />
            <Text>Premium Detail</Text>
          </View>

          <View style={styles.categoryBox}>
            <Ionicons name="sparkles-outline" size={26} color="#ff7b00" />
            <Text>Interior Clean</Text>
          </View>

          <View style={styles.categoryBox}>
            <MaterialIcons name="build-circle" size={28} color="#ff7b00" />
            <Text>Engine Wash</Text>
          </View>

          <View style={styles.categoryBox}>
            <Ionicons name="water-outline" size={26} color="#ff7b00" />
            <Text>Waxing</Text>
          </View>

        </ScrollView>

        {/* SERVICE CARDS */}

        {/* CARD 1 - 5 STARS + ORANGE HEART */}
        <View style={styles.card}>
          <Image source={require("../../assets/images/service1.png")} style={styles.cardImg} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Riverside Detailing</Text>

            <View style={styles.stars}>
              {[1,2,3,4,5].map(i => (
                <Ionicons key={i} name="star" size={14} color="#ff9900" />
              ))}
            </View>
          </View>

          <Ionicons name="heart" size={22} color="#ff7b00" />
        </View>

        {/* CARD 2 - 4 ORANGE + 1 GREY */}
        <View style={styles.card}>
          <Image source={require("../../assets/images/service2.png")} style={styles.cardImg} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Brookside Car Care</Text>

            <View style={styles.stars}>
              {[1,2,3,4].map(i => (
                <Ionicons key={i} name="star" size={14} color="#ff9900" />
              ))}
              <Ionicons name="star" size={14} color="#ccc" />
            </View>
          </View>

          <Ionicons name="heart-outline" size={22} color="red" />
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <Image source={require("../../assets/images/service3.png")} style={styles.cardImg} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Newburgh Auto Spa</Text>

            <View style={styles.stars}>
              {[1,2,3,4].map(i => (
                <Ionicons key={i} name="star" size={14} color="#ff9900" />
              ))}
              <Ionicons name="star" size={14} color="#ccc" />
            </View>
          </View>

          <Ionicons name="heart-outline" size={22} color="red" />
        </View>

        {/* CARD 4 */}
        <View style={styles.card}>
          <Image source={require("../../assets/images/service4.png")} style={styles.cardImg} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Auto Waxing Pro</Text>

            <View style={styles.stars}>
              {[1,2,3,4].map(i => (
                <Ionicons key={i} name="star" size={14} color="#ff9900" />
              ))}
              <Ionicons name="star" size={14} color="#ccc" />
            </View>
          </View>

          <Ionicons name="heart-outline" size={22} color="red" />
        </View>

        {/* CARD 5 */}
        <View style={styles.card}>
          <Image source={require("../../assets/images/service5.png")} style={styles.cardImg} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Ultimate Car Detail</Text>

            <View style={styles.stars}>
              {[1,2,3,4,5].map(i => (
                <Ionicons key={i} name="star" size={14} color="#ff9900" />
              ))}
            </View>
          </View>

          <Ionicons name="heart-outline" size={22} color="red" />
        </View>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#ff7b00" />
        <Ionicons name="calendar-outline" size={24} color="#777" />
        <Ionicons name="heart-outline" size={24} color="#777" />
        <Ionicons name="grid-outline" size={24} color="#777" />
        <Ionicons name="person-outline" size={24} color="#777" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mainContainer: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },

  leftHeader: { flexDirection: "row", alignItems: "center" },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  userName: { fontSize: 18, fontWeight: "bold" },

  locationRow: { flexDirection: "row", alignItems: "center" },

  locationText: { fontSize: 12, color: "#777" },

  banner: {
    width: 300,
    height: 160,
    borderRadius: 20,
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
  },

  categoryBox: {
    width: 110,
    backgroundColor: "#fff3eb",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },

  card: {
    flexDirection: "row",
    margin: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
    alignItems: "center",
  },

  cardImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  stars: {
    flexDirection: "row",
    marginTop: 5,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});


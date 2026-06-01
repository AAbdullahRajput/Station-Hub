import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Bottomnav from "@/components/Bottomnav";

const services = [
  {
    id: 1,
    name: "Riverside Detailing",
    image: require("../../assets/images/service1.png"),
  },
  {
    id: 2,
    name: "Brookside Car Care",
    image: require("../../assets/images/service2.png"),
  },
  {
    id: 3,
    name: "Newburgh Auto Spa",
    image: require("../../assets/images/service3.png"),
  },
  {
    id: 4,
    name: "Newburgh Auto Spa",
    image: require("../../assets/images/service4.png"),
  },
];

export default function Favorites() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#fffdfb", "#fff6f0", "#ffe8d8"]}   // ✅ SAME AS YOUR ORIGINAL
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>

        {/* HEADER */}
        <View style={styles.header}>
          
          {/* BACK BUTTON */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Favorites</Text>

          <Image
            source={require("../../assets/images/johndoe.png")}
            style={styles.profile}
          />
        </View>

        {/* SORT + FILTER */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="swap-vertical" size={16} />
            <Text style={styles.btnText}>Sort</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="filter" size={16} />
            <Text style={styles.btnText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* CARDS */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {services.map((item) => (
            <View key={item.id} style={styles.card}>
              
              <Image source={item.image} style={styles.image} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.location}>
                  <Ionicons name="location" size={13} color="#ff8c42" />
                  <Text style={styles.small}>0.3 mi away</Text>
                </View>

                <View style={styles.rating}>
                  <FontAwesome name="star" size={12} color="#FFB300" />
                  <Text style={styles.small}>4</Text>

                  <MaterialIcons name="person" size={12} color="gray" />
                  <Text style={styles.small}>12</Text>
                </View>
              </View>

              <Ionicons name="heart" size={22} color="#ff7a00" />
            </View>
          ))}
        </ScrollView>

        <Bottomnav />

      </SafeAreaView>
    </LinearGradient>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 45,   // ✅ FIX: moved down from status bar/charging area
    paddingBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },

  filterContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  button: {
    flex: 1,
    backgroundColor: "#FFF7F1",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#FFD6BF",
  },

  btnText: {
    fontWeight: "600",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 15,
    padding: 10,
    elevation: 3,
    alignItems: "center",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 4,
  },

  small: {
    color: "gray",
    fontSize: 12,
  },
});
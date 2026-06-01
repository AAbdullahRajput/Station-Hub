import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function BookingConfirmedScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Booking Confirmed</Text>

        <Image
          source={require("../../../assets/images/johndoe.png")}
          style={styles.profileImage}
        />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>
        Your service has been booked successfully
      </Text>

      {/* IMAGE */}
      <Image
        source={require("../../../assets/images/confirm.png")}
        style={styles.image}
      />

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.shopName}>Riverside Detailing</Text>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={14} />
          <Text>Downtown Chicago</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="miscellaneous-services" size={14} />
          <Text>Full Service</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={14} />
          <Text>12:00 PM</Text>
        </View>
      </View>

      {/* HOME BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/Home/home" as any)}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>
          Back To Home
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfb",   // base background (Favorites style feel)
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    marginTop: 40,
  },

  headerTitle: { fontSize: 16, fontWeight: "700" },

  profileImage: { width: 35, height: 35, borderRadius: 8 },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 5,
  },

  image: {
    width: 200,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },

  card: {
    margin: 18,
    padding: 15,
    backgroundColor: "#fff6f0",   // light peach card (Favorites style match)
    borderRadius: 10,
  },

  shopName: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },

  button: {
    backgroundColor: "#FF7A00",
    margin: 18,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function BookingConfirmedScreen() {
  return (
    <LinearGradient colors={["#FFF4EC", "#FFE2CC"]} style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Booking Confirmed</Text>

          <Image
            source={require("../../assets/images/johndoe.png")}
            style={styles.profileImage}
          />
        </View>

        {/* TITLE */}
        <Text style={styles.mainTitle}>Booking Confirmed!</Text>

        <Text style={styles.subtitle}>
          Your service has been successfully booked
        </Text>

        {/* IMAGE */}
        <Image
          source={require("../../assets/images/confirm.png.png")}
          style={styles.topImage}
        />

        {/* CARD */}
        <View style={styles.card}>

          <View style={styles.row}>
            <Image
              source={require("../../assets/images/riverside.png.png")}
              style={styles.cardImage}
            />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.shopName}>Riverside Detailing</Text>

              <View style={styles.row}>
                <Ionicons name="star" size={12} color="#FF8C42" />
                <Ionicons name="star" size={12} color="#FF8C42" />
                <Ionicons name="star" size={12} color="#FF8C42" />
                <Ionicons name="star" size={12} color="#FF8C42" />
                <Ionicons name="star-half" size={12} color="#FF8C42" />
                <Text style={styles.ratingText}>(25)</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={16} color="#FF8C42" />
            <Text style={styles.infoText}>Downtown Chicago • 1.8 km away</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="miscellaneous-services" size={16} color="#FF8C42" />
            <Text style={styles.infoText}>Full Detailing</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={16} color="#FF8C42" />
            <Text style={styles.infoText}>Feb 24, 2026, 10:00 AM</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="car-sport-outline" size={16} color="#FF8C42" />
            <Text style={styles.infoText}>Honda Civic, ALS 805</Text>
          </View>

        </View>

        {/* STATUS */}
        <View style={styles.statusRow}>
          <Text style={styles.statusText}>BOOKING STATUS</Text>
          <Text style={styles.completeText}>100% COMPLETE</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="arrow-back" size={18} color="#fff" />
          <Text style={styles.buttonText}>Back To Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.supportBtn}>
          <Ionicons name="call-outline" size={18} color="#FF8C42" />
          <Text style={styles.supportText}>Call Support</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Help Line: +92-300-4567-891</Text>
        <Text style={styles.footerText}>Booking ID: #BK-2026-4589</Text>

      </ScrollView>

      {/* BOTTOM NAV */}
     {/* BOTTOM NAV */}
<View style={styles.bottomNav}>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="home" size={22} color="#FF8C42" />
    <Text style={styles.navText}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="book" size={22} color="#FF8C42" />
    <Text style={styles.navText}>Booking</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="heart" size={22} color="#FF8C42" />
    <Text style={styles.navText}>Favorites</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="construct" size={22} color="#FF8C42" />
    <Text style={styles.navText}>Services</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="person" size={22} color="#FF8C42" />
    <Text style={styles.navText}>Profile</Text>
  </TouchableOpacity>

</View>
    </LinearGradient>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 50,
  },

  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
menuCard: {
  backgroundColor: "rgb(255, 255, 255)", // soft glass white
  marginHorizontal: 15,
  borderRadius: 12,
  padding: 14,
  marginTop: 10,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  elevation: 5,

  borderWidth: 1,
  borderColor: "rgba(255,140,66,0.15)", // orange soft border
},
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 5,
  },
  

  topImage: {
    width: 220,
    height: 160,
    alignSelf: "center",
    resizeMode: "contain",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
  },

  cardImage: {
    width: 55,
    height: 55,
    borderRadius: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  shopName: {
    fontSize: 15,
    fontWeight: "700",
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 11,
    color: "#666",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  infoText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#333",
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 18,
  },

  statusText: {
    fontSize: 11,
    color: "#666",
  },

  completeText: {
    fontSize: 11,
    color: "#FF8C42",
    fontWeight: "700",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },

  progressFill: {
    width: "100%",
    height: 6,
    backgroundColor: "#FF8C42",
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#FF8C42",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "700",
  },

  supportBtn: {
    borderWidth: 1.5,
    borderColor: "#FF8C42",
    marginHorizontal: 16,
    marginTop: 12,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },

  supportText: {
    color: "#FF8C42",
    marginLeft: 8,
    fontWeight: "700",
  },

  footerText: {
    textAlign: "center",
    fontSize: 11,
    color: "#777",
    marginTop: 5,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#f56809",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 10,
    marginTop: 3,
    color: "#ffffff",
  },

});
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BookingHistoryScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("upcoming");

  const bookingData = [
    {
      id: "1",
      service: "Premium Detail",
      shop: "Riverside Detailing",
      car: "Honda Civic, ALS 666",
      date: "Feb 24, 2026",
      time: "10:00 AM",
      price: "$ 20.50",
      status: "upcoming",
      hoursLeft: 26,
      image: require("../../../assets/images/booking.png.png"),
    },
    {
      id: "2",
      service: "Premium Detail",
      shop: "Riverside Detailing",
      car: "Toyota Corolla",
      date: "Feb 24, 2026",
      time: "12:00 PM",
      price: "$ 20.50",
      status: "upcoming",
      hoursLeft: 10,
      image: require("../../../assets/images/booking.png.png"),
    },
     {
      id: "3",
      service: "Premium Detail",
      shop: "Riverside Detailing",
      car: "Toyota Corolla",
      date: "Feb 24, 2026",
      time: "12:00 PM",
      price: "$ 20.50",
      status: "upcoming",
      hoursLeft: 10,
      image: require("../../../assets/images/booking.png.png"),
    },
     {
      id: "4",
      service: "Premium Detail",
      shop: "Riveride Detailing",
      car: "Toyota Corolla",
      date: "Feb 25, 2026",
      time: "12:00 PM",
      price: "$ 20.50",
      status: "upcoming",
      hoursLeft: 10,
      image: require("../../../assets/images/booking.png.png"),
    },
  ];

  const filteredData = bookingData.filter(
    (item) => item.status === activeTab
  );

  const handleCancel = () => {
    Alert.alert("Cancel Booking", "Are you sure you want to cancel?", [
      { text: "No" },
      { text: "Yes", style: "destructive" },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#FFF4EC", "#FFFFFF"]} style={styles.bg} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Booking History</Text>

        <Image
          source={require("../../../assets/images/johndoe.png")}
          style={styles.avatar}
        />
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        {["upcoming", "completed", "cancelled"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab === "upcoming"
                ? "Up-Coming"
                : tab === "completed"
                ? "Completed"
                : "Cancelled"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {activeTab !== "upcoming" ? (
          <View style={styles.empty}>
            <Ionicons
              name={
                activeTab === "completed"
                  ? "checkmark-circle-outline"
                  : "close-circle-outline"
              }
              size={60}
              color="#FF7A45"
            />

            <Text style={styles.emptyTitle}>
              {activeTab === "completed"
                ? "No completed bookings yet"
                : "No cancelled bookings yet"}
            </Text>

            <Text style={styles.emptySub}>
              Your bookings will appear here once processed
            </Text>
          </View>
        ) : (
          filteredData.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.service}>{item.service}</Text>
                <Text style={styles.shop}>{item.shop}</Text>

                <View style={styles.row}>
                  <Ionicons name="car-outline" size={14} color="#6B7280" />
                  <Text style={styles.text}>{item.car}</Text>
                </View>

                <View style={styles.row}>
                  <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                  <Text style={styles.text}>
                    {item.date} • {item.time}
                  </Text>
                </View>

                <Text style={styles.price}>
                  Total Payment $ {item.price}
                </Text>

                <View style={styles.bottomRow}>
                  <View style={styles.hoursBtn}>
                    <Text style={{ color: "#fff", fontSize: 10 }}>
                      {item.hoursLeft} Hours Left
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={handleCancel}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },

  bg: {
    position: "absolute",
    width: "100%",
    height: 200,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  tab: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF7A45",
  },

  tabText: {
    color: "#6B7280",
    fontSize: 12,
  },

  activeTabText: {
    color: "#FF7A45",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderRadius: 16,
  },

  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },

  service: {
    fontSize: 16,
    fontWeight: "700",
  },

  shop: {
    color: "#6B7280",
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  text: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 4,
  },

  price: {
    fontWeight: "700",
    marginTop: 5,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },

  hoursBtn: {
    backgroundColor: "#FF7A45",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  cancelBtn: {
    borderWidth: 1,
    borderColor: "#FF7A45",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  cancelText: {
    color: "#FF7A45",
    fontSize: 10,
  },

  empty: {
    alignItems: "center",
    marginTop: 80,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },

  emptySub: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },
});
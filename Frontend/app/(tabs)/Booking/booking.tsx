import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useRouter } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Bottomnav from "@/components/Bottomnav";
import { LinearGradient } from "expo-linear-gradient";

export default function BookingScreen() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState("Full Service");
  const [selectedDate, setSelectedDate] = useState("11");
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [vehicleType, setVehicleType] = useState("Car");

  const services = [
    { id: 1, title: "Car Wash", icon: "car" },
    { id: 2, title: "Full Service", icon: "car-side" },
    { id: 3, title: "Oil Changing", icon: "oil-can" },
    { id: 4, title: "Detailing", icon: "spray-can" },
  ];

  const dates = [
    { day: "Sun", num: "02" },
    { day: "Mon", num: "03" },
    { day: "Tue", num: "04" },
    { day: "Wed", num: "11" },
    { day: "Thu", num: "12" },
    { day: "Fri", num: "13" },
  ];

  const times = ["10:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  return (
    <LinearGradient
      colors={["#fffdfb", "#fff6f0", "#ffe8d8"]}   // ✅ FAVORITES BACKGROUND
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Book Your Wash</Text>

            <Image
              source={require("../../../assets/images/johndoe.png")}
              style={styles.profileImage}
            />
          </View>

          {/* SHOP CARD */}
          <View style={styles.card}>
            <Image
              source={require("../../../assets/images/riverside.png")}
              style={styles.image}
            />

            <Text style={styles.shopName}>Riverside Detailing</Text>
            <Text style={styles.location}>
              📍 Downtown • 1.8 km away
            </Text>
          </View>

          {/* SERVICES */}
          <Text style={styles.sectionTitle}>Select Service</Text>

          <View style={styles.serviceContainer}>
            {services.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.serviceCard,
                  selectedService === item.title && styles.activeService,
                ]}
                onPress={() => setSelectedService(item.title)}
              >
                <FontAwesome5
                  name={item.icon}
                  size={18}
                  color={selectedService === item.title ? "#fff" : "#ff8c00"}
                />
                <Text
                  style={[
                    styles.serviceText,
                    selectedService === item.title && { color: "#fff" },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DATE */}
          <Text style={styles.sectionTitle}>Select Date</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((item) => (
              <TouchableOpacity
                key={item.num}
                style={[
                  styles.dateCard,
                  selectedDate === item.num && styles.activeDate,
                ]}
                onPress={() => setSelectedDate(item.num)}
              >
                <Text style={{ color: selectedDate === item.num ? "#fff" : "#000" }}>
                  {item.day}
                </Text>
                <Text style={{ color: selectedDate === item.num ? "#fff" : "#000" }}>
                  {item.num}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* TIME */}
          <Text style={styles.sectionTitle}>Select Time</Text>

          <View style={styles.timeContainer}>
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeBtn,
                  selectedTime === time && styles.activeTime,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={{ color: selectedTime === time ? "#fff" : "#000" }}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* VEHICLE */}
          <Text style={styles.sectionTitle}>Vehicle Type</Text>

          <View style={styles.vehicleTabs}>
            <TouchableOpacity
              style={[
                styles.vehicleTab,
                vehicleType === "Car" && styles.activeVehicleTab,
              ]}
              onPress={() => setVehicleType("Car")}
            >
              <Text style={vehicleType === "Car" ? styles.activeVehicleText : styles.vehicleText}>
                Car
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.vehicleTab,
                vehicleType === "Motorbike" && styles.activeVehicleTab,
              ]}
              onPress={() => setVehicleType("Motorbike")}
            >
              <Text style={vehicleType === "Motorbike" ? styles.activeVehicleText : styles.vehicleText}>
                Motorbike
              </Text>
            </TouchableOpacity>
          </View>

          {/* INPUTS */}
          <View style={styles.inputRow}>
            <TextInput placeholder="Vehicle Brand" style={styles.input} />
            <TextInput placeholder="Vehicle Number" style={styles.input} />
          </View>

          {/* CONFIRM */}
          <TouchableOpacity
            style={styles.confirmBtn}
            onPress={() => router.push("/(tabs)/Booking/bookingconfirm")}
          >
            <Text style={styles.confirmText}>Confirm Booking</Text>
          </TouchableOpacity>

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
    padding: 18,
    marginTop: 40,
  },

  headerTitle: { fontSize: 20, fontWeight: "700" },

  profileImage: { width: 40, height: 40, borderRadius: 20 },

  card: { margin: 18 },

  image: { width: "100%", height: 160, borderRadius: 15 },

  shopName: { fontSize: 18, fontWeight: "700", marginTop: 10 },

  location: { color: "#666", marginTop: 5 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 18,
    marginTop: 15,
  },

  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: 10,
  },

  serviceCard: {
    width: 80,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  activeService: {
    backgroundColor: "#FF7A00",
    borderColor: "#FF7A00",
  },

  serviceText: { fontSize: 11, marginTop: 5 },

  dateCard: {
    width: 60,
    height: 70,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  activeDate: { backgroundColor: "#FF7A00" },

  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
  },

  timeBtn: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },

  activeTime: {
    backgroundColor: "#FF7A00",
    borderColor: "#FF7A00",
  },

  vehicleTabs: {
    flexDirection: "row",
    padding: 18,
  },

  vehicleTab: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
  },

  activeVehicleTab: {
    backgroundColor: "#FF7A00",
  },

  vehicleText: { color: "#000" },

  activeVehicleText: { color: "#fff" },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  input: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  confirmBtn: {
    backgroundColor: "rgb(255, 122, 0)",
    margin: 18,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  confirmText: { color: "#fff", fontWeight: "700" },
});
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

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function BookingScreen() {
  const [selectedService, setSelectedService] =
    useState("Full Service");

  const [selectedDate, setSelectedDate] = useState("11");

  const [selectedTime, setSelectedTime] =
    useState("12:00 PM");

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

  const times = [
    "10:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#000"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Book Your Wash
          </Text>

          <Image
            source={require("../../assets/images/johndoe.png")}
            style={styles.profileImage}
          />
        </View>

        {/* CARD */}
        <View style={styles.card}>
          
          <Image
            source={require("../../assets/images/riverside.png.png")}
            style={styles.image}
          />

          <View style={styles.cardContent}>

            <View style={styles.rowBetween}>
              <Text style={styles.shopName}>
                Riverside Detailing
              </Text>

              <View style={styles.ratingRow}>
                <Ionicons
                  name="star"
                  size={14}
                  color="#FFA500"
                />

                <Text style={styles.rating}>
                  4.8
                </Text>
              </View>
            </View>

            <Text style={styles.location}>
              📍 Downtown Chicago • 1.8 km away
            </Text>

            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeBtnText}>
                Change Station
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* SERVICES */}
        <Text style={styles.sectionTitle}>
          Select Service
        </Text>

        <View style={styles.serviceContainer}>
          {services.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.serviceCard,
                selectedService === item.title &&
                  styles.activeService,
              ]}
              onPress={() =>
                setSelectedService(item.title)
              }
            >
              <FontAwesome5
                name={item.icon}
                size={20}
                color={
                  selectedService === item.title
                    ? "#fff"
                    : "#ff8c00"
                }
              />

              <Text
                style={[
                  styles.serviceText,
                  selectedService === item.title && {
                    color: "#fff",
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* DATE */}
        <View style={styles.dateHeader}>
          <Text style={styles.sectionTitle}>
            Select Date
          </Text>

          <View style={styles.monthRow}>
            
            <TouchableOpacity>
              <Ionicons
                name="chevron-back"
                size={20}
                color="#000"
              />
            </TouchableOpacity>

            <Text style={styles.month}>
              February 2026
            </Text>

            <TouchableOpacity>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#000"
              />
            </TouchableOpacity>

          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {dates.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCard,
                selectedDate === item.num &&
                  styles.activeDate,
              ]}
              onPress={() =>
                setSelectedDate(item.num)
              }
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDate === item.num && {
                    color: "#fff",
                  },
                ]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.dateText,
                  selectedDate === item.num && {
                    color: "#fff",
                  },
                ]}
              >
                {item.num}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* TIME */}
        <Text style={styles.sectionTitle}>
          Select Time
        </Text>

        <View style={styles.timeContainer}>
          {times.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeBtn,
                selectedTime === time &&
                  styles.activeTime,
              ]}
              onPress={() =>
                setSelectedTime(time)
              }
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && {
                    color: "#fff",
                  },
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* VEHICLE */}
        <Text style={styles.sectionTitle}>
          Vehicle Type
        </Text>

        <View style={styles.vehicleTabs}>
          
          <TouchableOpacity
            style={styles.activeVehicleTab}
          >
            <Text style={styles.activeVehicleText}>
              Car
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.vehicleTab}
          >
            <Text style={styles.vehicleText}>
              Motorbike
            </Text>
          </TouchableOpacity>

        </View>

        {/* INPUTS */}
        <View style={styles.inputRow}>
          
          <TextInput
            placeholder="Vehicle Brand"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Vehicle Number"
            placeholderTextColor="#999"
            style={styles.input}
          />

        </View>

        {/* SPECIAL REQUEST */}
        <Text style={styles.sectionTitle}>
          Special Request (Optional)
        </Text>

        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Write here..."
          placeholderTextColor="#999"
          style={styles.textArea}
        />

        {/* PRICE SUMMARY */}
        <Text style={styles.sectionTitle}>
          Price Summary
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Service
          </Text>

          <Text style={styles.priceValue}>
            Rs.1500
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Discount
          </Text>

          <Text style={styles.discount}>
            -20%
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.totalText}>
            Total
          </Text>

          <Text style={styles.totalPrice}>
            Rs.1200
          </Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>
            Confirm Booking
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="home"
            size={22}
            color="#ff8c00"
          />
          <Text style={styles.navTextOrange}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="book"
            size={22}
            color="#ff8c00"
          />
          <Text style={styles.navTextOrange}>
            Booking
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="heart"
            size={22}
            color="#ff8c00"
          />
          <Text style={styles.navTextOrange}>
            Favourite
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="construct"
            size={22}
            color="#ff8c00"
          />
          <Text style={styles.navTextOrange}>
            Service
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="person"
            size={22}
            color="#ff8c00"
          />
          <Text style={styles.navTextOrange}>
            Profile
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 45,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    borderRadius: 20,
    padding: 12,
    elevation: 4,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 170,
    borderRadius: 18,
    resizeMode: "cover",
  },

  cardContent: {
    marginTop: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shopName: {
    fontSize: 17,
    fontWeight: "700",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    marginLeft: 4,
    fontWeight: "600",
  },

  location: {
    color: "#666",
    marginTop: 5,
  },

  changeBtn: {
    backgroundColor: "#ff8c00",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
  },

  changeBtnText: {
    color: "#fff",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginHorizontal: 18,
    marginBottom: 12,
  },

  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  serviceCard: {
    width: 80,
    height: 90,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  activeService: {
    backgroundColor: "#ff8c00",
    borderColor: "#ff8c00",
  },

  serviceText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "600",
    color: "#333",
  },

  dateHeader: {
    paddingHorizontal: 18,
  },

  monthRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  month: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },

  dateCard: {
    width: 65,
    height: 75,
    borderRadius: 18,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 18,
  },

  activeDate: {
    backgroundColor: "#ff8c00",
  },

  dayText: {
    color: "#666",
    marginBottom: 5,
  },

  dateText: {
    fontSize: 18,
    fontWeight: "700",
  },

  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    marginBottom: 15,
  },

  timeBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },

  activeTime: {
    backgroundColor: "#ff8c00",
    borderColor: "#ff8c00",
  },

  timeText: {
    fontWeight: "600",
  },

  vehicleTabs: {
    flexDirection: "row",
    paddingHorizontal: 18,
    marginBottom: 15,
  },

  activeVehicleTab: {
    backgroundColor: "#ff8c00",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  activeVehicleText: {
    color: "#fff",
    fontWeight: "700",
  },

  vehicleTab: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  vehicleText: {
    fontWeight: "600",
  },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  input: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 15,
  },

  textArea: {
    marginHorizontal: 18,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    textAlignVertical: "top",
    marginBottom: 20,
    height: 90,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 8,
  },

  priceLabel: {
    color: "#666",
  },

  priceValue: {
    fontWeight: "600",
  },

  discount: {
    color: "red",
    fontWeight: "600",
  },

  totalText: {
    fontSize: 16,
    fontWeight: "700",
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff8c00",
  },

  confirmBtn: {
    backgroundColor: "#ff8c00",
    marginHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 110,
  },

  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  navItem: {
    alignItems: "center",
  },

  navTextOrange: {
    color: "#ff8c00",
    fontSize: 11,
    marginTop: 4,
    fontWeight: "600",
  },

});
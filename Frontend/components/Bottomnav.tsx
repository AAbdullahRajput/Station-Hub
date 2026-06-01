import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname.includes(route);

  return (
    <LinearGradient
      colors={["#FFAA33", "#FF7A00", "#ff5500"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {/* HOME */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.replace("/Home/home")}
      >
        <Ionicons
          name="home"
          size={24}
          color={isActive("Home") ? "#FFFFFF" : "#FFF3E0"}
        />
        <Text style={[styles.text, isActive("Home") && styles.activeText]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* BOOKING */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.replace("/Booking/booking")}
      >
        <Ionicons
          name="calendar"
          size={24}
          color={isActive("Booking") ? "#FFFFFF" : "#FFF3E0"}
        />
        <Text style={[styles.text, isActive("Booking") && styles.activeText]}>
          Booking
        </Text>
      </TouchableOpacity>

      {/* FAVORITES */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.replace("/Favourite")}
      >
        <Ionicons
          name="heart"
          size={24}
          color={isActive("Favourite") ? "#FFFFFF" : "#FFF3E0"}
        />
        <Text style={[styles.text, isActive("Favourite") && styles.activeText]}>
          Favorites
        </Text>
      </TouchableOpacity>

      {/* SERVICES */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.replace("/service")}
      >
        <Ionicons
          name="construct"
          size={24}
          color={isActive("service") ? "#FFFFFF" : "#FFF3E0"}
        />
        <Text style={[styles.text, isActive("service") && styles.activeText]}>
          Services
        </Text>
      </TouchableOpacity>

      {/* PROFILE */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.replace("/profile")}
      >
        <Ionicons
          name="person"
          size={24}
          color={isActive("profile") ? "#FFFFFF" : "#FFF3E0"}
        />
        <Text style={[styles.text, isActive("profile") && styles.activeText]}>
          Profile
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    borderTopWidth: 1,
    borderColor: "#FFD180",

    shadowColor: "#FF7A00",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 10,
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    marginTop: 4,
    fontSize: 12,
    color: "#FFF3E0",
    opacity: 0.85,
  },

  activeText: {
    color: "#FFFFFF",
    opacity: 1,
    fontWeight: "700",
  },
});
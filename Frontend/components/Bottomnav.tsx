import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (key: string) => pathname.includes(key);

  const tabs = [
    { label: "Home", icon: "home", key: "Home", route: "/Home/home" },
    { label: "Booking", icon: "calendar", key: "Booking", route: "/Booking/booking" },
    { label: "Favorite", icon: "heart", key: "Favourite", route: "/Favourite" },
    { label: "Services", icon: "construct", key: "service", route: "/service/index" },
    { label: "Profile", icon: "person", key: "profile", route: "/(tabs)/profile/profilesetting" },
  ];

  return (
    <LinearGradient
      colors={["#FFAA33", "#FF7A00", "#ff5500"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {tabs.map((tab) => {
        const active = isActive(tab.key);
        return (
          <TouchableOpacity
            key={tab.label}
            style={styles.item}
            onPress={() => router.replace(tab.route as any)}
          >
            <View style={[styles.iconWrap, active && styles.activeIconWrap]}>
              <Ionicons
  name={tab.icon as any}
  size={22}
  color={active ? "#000000" : "#FFFFFF"}
/>
            </View>
            <Text style={[styles.text, active && styles.activeText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#FFD180",
    shadowColor: "#FF7A00",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  iconWrap: {
    width: 42,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  activeIconWrap: {
  width: 42,
  height: 28,
},

  text: {
    marginTop: 3,
    fontSize: 11,
    color: "#FFF3E0",
    opacity: 0.85,
  },

  activeText: {
  color: "#000000",
  opacity: 1,
  fontWeight: "700",
},
});
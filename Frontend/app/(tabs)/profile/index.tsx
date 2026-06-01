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
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* GRADIENT BACKGROUND */}
        <LinearGradient
          colors={["#FF7A45", "#FF9366"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          {/* PROFILE CARD */}
          <View style={styles.profileCard}>
            <Image
              source={require("../../../assets/images/johndoe.png")}
              style={styles.avatar}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
          </View>
        </LinearGradient>

        {/* MENU ITEMS */}
        <View style={styles.menuContainer}>
          {/* MANAGE PROFILE */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/(tabs)/profile/manageprofile")}
          >
            <Ionicons name="person-outline" size={20} color="#FF7A45" />
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Manage Profile</Text>
              <Text style={styles.menuSubtitle}>Update your info</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          {/* BOOKING HISTORY */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/(tabs)/profile/bookinghistory")}
          >
            <Ionicons name="history" size={20} color="#FF7A45" />
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Booking History</Text>
              <Text style={styles.menuSubtitle}>View past bookings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          {/* SETTINGS */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/(tabs)/profile/profilesetting")}
          >
            <Ionicons name="settings-outline" size={20} color="#FF7A45" />
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuSubtitle}>App preferences</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          {/* LOGOUT */}
          <TouchableOpacity
            style={[styles.menuItem, styles.logoutItem]}
            onPress={() => router.push("/(tabs)/profile/logout")}
          >
            <Ionicons name="log-out-outline" size={20} color="#FF0000" />
            <View style={styles.menuText}>
              <Text style={[styles.menuTitle, { color: "#FF0000" }]}>Logout</Text>
              <Text style={styles.menuSubtitle}>Sign out of your account</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  profileCard: {
    alignItems: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginTop: 15,
  },

  email: {
    fontSize: 14,
    color: "#ffff",
    marginTop: 5,
  },

  menuContainer: {
    padding: 16,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  logoutItem: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ffcccc",
  },

  menuText: {
    marginLeft: 16,
    flex: 1,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  menuSubtitle: {
    fontSize: 12,
    color: "#999",
    marginTop: 3,
  },
});

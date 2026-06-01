import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileSettingsScreen() {
  const router = useRouter();

  /* ================= DATA ================= */

  const generalItems = [
    {
  id: 1,
  title: "Manage your profile",
  subtitle: "Change profile picture, name, number & mail",
  icon: <Feather name="user" size={20} color="#FF7A45" />,
  route: "/profile/manageprofile",
},
    {
      id: 2,
      title: "Change Password",
      subtitle: "Update your password",
      icon: <Feather name="lock" size={20} color="#FF7A45" />,
      route: "/profile/changepassword",
    },
    {
      id: 3,
      title: "Notifications",
      subtitle: "Stay updated with alerts",
      icon: (
        <Ionicons name="notifications-outline" size={20} color="#FF7A45" />
      ),
      route: "/profile/notifications",
    },
    {
      id: 4,
      title: "Booking History",
      subtitle: "View past bookings",
      icon: <Feather name="clock" size={20} color="#FF7A45" />,
      route: "/profile/bookinghistory",
    },
    {
      id: 5,
      title: "Promo & Rewards",
      subtitle: "Offers & discounts",
      icon: <Feather name="gift" size={20} color="#FF7A45" />,
      route: "/profile/promorewards",
    },
  ];

  const settingsItems = [
    {
      id: 1,
      title: "Language",
      subtitle: "Change app language",
      icon: <Feather name="globe" size={20} color="#FF7A45" />,
      route: "/profile/language",
    },
    {
      id: 2,
      title: "Privacy Policy",
      subtitle: "Read privacy details",
      icon: <Feather name="shield" size={20} color="#FF7A45" />,
      route: "/profile/privacypolicy",
    },
    {
      id: 3,
      title: "Help & Support",
      subtitle: "Get help",
      icon: <Feather name="headphones" size={20} color="#FF7A45" />,
      route: "/profile/helpsupport",
    },
    {
      id: 4,
      title: "About App",
      subtitle: "App info",
      icon: <Feather name="info" size={20} color="#FF7A45" />,
      route: "/profile/aboutapp",
    },
  ];

  /* ================= RENDER ITEM (FIXED) ================= */

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.itemCard}
        activeOpacity={0.8}
        onPress={() => router.push(item.route)}
      >
        <View style={styles.iconContainer}>
          {item.icon}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>
            {item.title}
          </Text>
          <Text style={styles.itemSubtitle}>
            {item.subtitle}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#9CA3AF"
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* GRADIENT */}
      <LinearGradient
        colors={["#FFE4DA", "#FFF5F0", "#FFFFFF"]}
        style={styles.gradient}
      />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#1A1A1A"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Profile Settings
          </Text>

          <View style={{ width: 24 }} />
        </View>

        {/* PROFILE CARD */}
        <TouchableOpacity style={styles.profileCard}>
          <View style={styles.profileLeft}>
            <Image
              source={require("../../../assets/images/johndoe.png")}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.profileName}>
                John Doe
              </Text>
              <Text style={styles.profileEmail}>
                johndoe@gmail.com
              </Text>
            </View>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#9CA3AF"
          />
        </TouchableOpacity>

        {/* GENERAL */}
        <Text style={styles.sectionTitle}>
          General
        </Text>
        {generalItems.map(renderItem)}

        {/* SETTINGS */}
        <Text style={styles.sectionTitle}>
          Settings
        </Text>
        {settingsItems.map(renderItem)}

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutCard}>
          <View style={styles.logoutLeft}>
            <MaterialIcons
              name="logout"
              size={22}
              color="#EF4444"
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.logoutTitle}>
                Logout
              </Text>
              <Text style={styles.logoutSubtitle}>
                Sign out safely
              </Text>
            </View>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 220,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  profileCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 12,
  },

  profileName: {
    fontWeight: "700",
    fontSize: 16,
  },

  profileEmail: {
    color: "#6B7280",
    fontSize: 13,
  },

  sectionTitle: {
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 10,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  itemCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF1EB",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  itemTitle: {
    fontWeight: "600",
  },

  itemSubtitle: {
    fontSize: 12,
    color: "#6B7280",
  },

  logoutCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logoutLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoutTitle: {
    color: "#EF4444",
    fontWeight: "700",
  },

  logoutSubtitle: {
    fontSize: 12,
    color: "#6B7280",
  },
});
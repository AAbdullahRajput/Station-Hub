import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServicesScreen() {
  const [activeTab, setActiveTab] = useState("premium");

  const services = [1, 2, 3, 4];

  const getTitle = () => {
    if (activeTab === "basic") return "Basic Detail";
    if (activeTab === "addons") return "Add-ons Detail";
    return "Premium Detail";
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF4EC" />

      {/* WHOLE SCREEN SCROLL */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* STATUS BAR */}
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>

          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={14} color="#000" />
            <Ionicons name="wifi" size={14} color="#000" />
            <Ionicons name="battery-full" size={14} color="#000" />
          </View>
        </View>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Services</Text>

          <Image
            source={require("../../../assets/images/johndoe.png")}
            style={styles.profileImg}
          />
        </View>

        {/* TABS */}
        <View style={styles.tabContainer}>
          {["basic", "premium", "addons"].map((tab) => (
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
                {tab === "addons"
                  ? "Add-ons"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CARDS */}
        {services.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={require("../../../assets/images/service1.png")}
              style={styles.image}
            />

            <View style={styles.cardContent}>
              <Text style={styles.title}>{getTitle()}</Text>

              <Text style={styles.subtitle}>
                Riverside Detailing
              </Text>

              {/* INFO */}
              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color="#666"
                  />
                  <Text style={styles.infoText}>
                    0.35 mi away
                  </Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons
                    name="star"
                    size={14}
                    color="#FF8C42"
                  />
                  <Text style={styles.infoText}>4.0</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons
                    name="time-outline"
                    size={14}
                    color="#666"
                  />
                  <Text style={styles.infoText}>
                    20-30 min
                  </Text>
                </View>
              </View>

              {/* PRICE + BUTTONS */}
              <View style={styles.bottomRow}>
                <Text style={styles.price}>$20.50</Text>

                <View style={styles.btnRow}>
                  <TouchableOpacity style={styles.scheduleBtn}>
                    <Text style={styles.scheduleText}>
                      Schedule
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.viewBtn}>
                    <Text style={styles.viewText}>
                      View Detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="book" size={22} color="#fff" />
          <Text style={styles.navText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart" size={22} color="#fff" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="construct" size={22} color="#fff" />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={22} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ====================== STYLES ====================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4EC",
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  /* STATUS BAR */

  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  statusIcons: {
    flexDirection: "row",
    gap: 6,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  profileImg: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },

  /* TABS */

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 5,
    marginBottom: 18,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#FF8C42",
  },

  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
  },

  activeTabText: {
    color: "#fff",
  },

  /* CARD */

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
  },

  image: {
    width: 110,
    height: 160,
  },

  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  infoText: {
    fontSize: 11,
    color: "#666",
  },

  /* PRICE + BUTTONS */

  bottomRow: {
    justifyContent: "space-between",
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FF8C42",
    marginBottom: 10,
  },

  btnRow: {
    flexDirection: "row",
    gap: 8,
  },

  scheduleBtn: {
    backgroundColor: "#FF8C42",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  scheduleText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  viewBtn: {
    borderWidth: 1,
    borderColor: "#FF8C42",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  viewText: {
    color: "#FF8C42",
    fontSize: 12,
    fontWeight: "600",
  },

  /* BOTTOM NAV */

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#F56809",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 3,
  },
});
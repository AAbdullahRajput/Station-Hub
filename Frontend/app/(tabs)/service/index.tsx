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
import { useRouter } from "expo-router";
import Bottomnav from "@/components/Bottomnav";

type TabType = "basic" | "premium" | "addons";

export default function ServicesScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("premium");

  const tabData = {
    basic: "Basic Detail",
    premium: "Premium Detail",
    addons: "Add-ons Detail",
  };

  const services = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF4EC" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
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
          {(["basic", "premium", "addons"] as TabType[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab === "addons" ? "Add-ons" : tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CARDS */}
        {services.map((item) => (
          <TouchableOpacity
            key={item}
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => router.push("/Home/stationdetail")}
          >
            <Image
              source={require("../../../assets/images/service1.png")}
              style={styles.image}
            />

            <View style={styles.cardContent}>
              {/* TITLE */}
              <Text style={styles.title}>{tabData[activeTab]}</Text>

              <Text style={styles.subtitle}>Riverside Detailing</Text>

              {/* INFO */}
              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text style={styles.infoText}>0.35 mi away</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons name="star" size={14} color="#FF8C42" />
                  <Text style={styles.infoText}>4.0</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.infoText}>20-30 min</Text>
                </View>
              </View>

              {/* PRICE + BUTTONS */}
              <View style={styles.bottomRow}>
                <Text style={styles.price}>$20.50</Text>

                <View style={styles.btnRow}>
                  <TouchableOpacity style={styles.scheduleBtn}>
                    <Text style={styles.scheduleText}>Schedule</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.viewBtn}
                    onPress={() => router.push("/Home/stationdetail")}
                  >
                    <Text style={styles.viewText}>View Detail</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Bottomnav />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4EC",
    paddingTop: 40,
    paddingHorizontal: 16,
  },

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
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
  },

  activeTabText: {
    color: "#fff",
  },

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
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  bottomRow: {
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FF8C42",
    marginBottom: 8,
  },

  btnRow: {
    flexDirection: "row",
    gap: 8,
  },

  scheduleBtn: {
    backgroundColor: "#FF8C42",
    paddingVertical: 6,
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
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  viewText: {
    color: "#FF8C42",
    fontSize: 12,
    fontWeight: "600",
  },
});
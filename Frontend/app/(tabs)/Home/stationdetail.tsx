import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

import { useRouter } from "expo-router";
import Bottomnav from "@/components/Bottomnav";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function StationDetail() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDE9E6" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Riverside Detailing</Text>

        <Ionicons name="information-circle-outline" size={22} color="#000" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* MAIN CARD */}
        <View style={styles.card}>
          <Image
            source={require("../../../assets/images/riverside.png")}
            style={styles.mainImage}
          />

          <Text style={styles.stationTitle}>Riverside Detailing</Text>

          <View style={styles.row}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Ionicons key={i} name="star" size={16} color="#F97316" />
            ))}
            <Text style={{ marginLeft: 6, fontSize: 12 }}>25</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-sharp" size={16} color="gray" />
            <Text style={styles.locationText}>
              Downtown Chicago • 1.8 km away
            </Text>
          </View>
        </View>

        {/* ABOUT CARD */}
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>About</Text>

          <Text style={styles.aboutText}>
            Riverside Detailing provides professional car care services, from
            quick washes to complete detailing. Our skilled team uses modern
            tools and quality products to keep your vehicle clean, protected,
            and looking its best.
          </Text>

          {/* ICONS */}
          <View style={styles.iconRow}>
            <View style={styles.iconBox}>
              <Ionicons name="car" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Express Wash</Text>
            </View>

            <View style={styles.iconBox}>
              <Ionicons name="star" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Premium</Text>
            </View>

            <View style={styles.iconBox}>
              <Ionicons name="water" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Interior</Text>
            </View>

            <View style={styles.iconBox}>
              <FontAwesome5 name="cogs" size={16} color="#fff" />
              <Text style={styles.iconLabel}>Engine</Text>
            </View>

            <View style={styles.iconBox}>
              <Ionicons name="shield-checkmark" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Waxing</Text>
            </View>
          </View>

          {/* IMAGE GRID */}
          <View style={styles.imageGrid}>
            <Image
              source={require("../../../assets/images/pic1.png")}
              style={styles.bigImg}
            />

            <View style={styles.rightColumn}>
              <Image
                source={require("../../../assets/images/pic2.png")}
                style={styles.smallImg}
              />

              <Image
                source={require("../../../assets/images/pic3.png")}
                style={styles.smallImg}
              />
            </View>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>

      </ScrollView>

      <Bottomnav />
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE9E6",
  },

 header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 10,
  marginTop: 10, // 👈 only small spacing
},

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 16,
  },

  mainImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
  },

  stationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  locationText: {
    marginLeft: 6,
    fontSize: 12,
    color: "gray",
  },

  aboutCard: {
    backgroundColor: "#1B2A41",
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },

  aboutTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  aboutText: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  iconBox: {
    alignItems: "center",
    backgroundColor: "#F97316",
    padding: 8,
    borderRadius: 20,
    width: 62,
  },

  iconLabel: {
    color: "#fff",
    fontSize: 9,
    marginTop: 4,
    textAlign: "center",
  },

  imageGrid: {
    flexDirection: "row",
    marginTop: 15,
    height: 170,
  },

  bigImg: {
    flex: 2,
    height: "100%",
    borderRadius: 12,
    resizeMode: "cover",
  },

  rightColumn: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "space-between",
  },

  smallImg: {
    height: 80,
    width: "100%",
    borderRadius: 12,
    resizeMode: "cover",
  },

  button: {
    backgroundColor: "#F97316",
    margin: 16,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
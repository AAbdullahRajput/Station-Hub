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
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function StationDetail() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDE9E6" />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.time}>9:41</Text>
          <Ionicons
            name="arrow-back"
            size={22}
            color="#000"
            style={{ marginLeft: 10 }}
          />
        </View>

        <Text style={styles.headerTitle}>Riverside Detailing</Text>

        <Ionicons name="information-circle-outline" size={22} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* CARD 1 */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/riverside.png.png")}
            style={styles.mainImage}
          />

          <Text style={styles.stationTitle}>Riverside Detailing</Text>

          {/* STARS */}
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Ionicons key={i} name="star" size={16} color="#F97316" />
              ))}
              <Text style={styles.reviewText}>25</Text>
            </View>
          </View>

          {/* LOCATION */}
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

          {/* ICON ROW */}
          <View style={styles.iconRow}>
            <View style={styles.iconBox}>
              <Ionicons name="car" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Wash</Text>
            </View>

            <View style={styles.iconBox}>
              <Ionicons name="shield-checkmark" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Detail</Text>
            </View>

            <View style={styles.iconBox}>
              <MaterialIcons name="event-seat" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Interior</Text>
            </View>

            <View style={styles.iconBox}>
              <FontAwesome5 name="cogs" size={16} color="#fff" />
              <Text style={styles.iconLabel}>Engine</Text>
            </View>

            <View style={styles.iconBox}>
              <Ionicons name="water" size={18} color="#fff" />
              <Text style={styles.iconLabel}>Wax</Text>
            </View>
          </View>

          {/* 3 IMAGES ROW (IMPORTANT PART YOU ASKED) */}
          <View style={styles.imageRow}>
            <Image
              source={require("../../assets/images/pic1.png")}
              style={styles.smallImg}
            />
            <Image
              source={require("../../assets/images/pic2.png")}
              style={styles.smallImg}
            />
            <Image
              source={require("../../assets/images/pic3.png.png")}
              style={styles.smallImg}
            />
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
      </ScrollView>
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
    padding: 16,
    alignItems: "center",
  },

  time: {
    fontSize: 14,
    fontWeight: "600",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
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

  reviewText: {
    marginLeft: 6,
    fontSize: 12,
  },

  locationText: {
    marginLeft: 6,
    color: "gray",
    fontSize: 12,
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
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  iconBox: {
    alignItems: "center",
    backgroundColor: "#F97316",
    padding: 10,
    borderRadius: 25,
    width: 60,
  },

  iconLabel: {
    color: "#fff",
    fontSize: 10,
    marginTop: 4,
    textAlign: "center",
  },

  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  smallImg: {
    width: width / 3.5,
    height: 70,
    borderRadius: 10,
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
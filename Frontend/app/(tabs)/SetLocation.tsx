import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SetLocationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#fff5ee"
        barStyle="dark-content"
      />

      {/* Logo */}
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Hello, nice to
      </Text>
      <Text style={styles.title}>
        meet you!
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Set your location to start finding
      </Text>
      <Text style={styles.subtitle}>
        car wash around you
      </Text>

      {/* Main Button */}
      <TouchableOpacity
        style={styles.locationBtn}
        onPress={() => router.push("/ChooseLocation")}
      >
        <Ionicons
          name="location-sharp"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />

        <Text style={styles.locationText}>
          Use Current Location
        </Text>
      </TouchableOpacity>

      {/* Note */}
      <Text style={styles.note}>
        We only access your location while you
        are using this incredible app
      </Text>

      {/* Manual Link */}
      <TouchableOpacity
        onPress={() => router.push("/ChooseLocation")}
      >
        <Text style={styles.manualText}>
          or set your location manually
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5ee",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  logoBox: {
    alignItems: "center",
    marginBottom: 15,
  },

  logoColumn: {
    marginBottom: 20,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    marginTop: 5,
  },

  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#ff7a00",
    marginVertical: 25,
  },

  locationText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  note: {
    fontSize: 13,
    color: "#8a8a8a",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  manualText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },
});
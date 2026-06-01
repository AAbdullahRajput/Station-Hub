import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

export default function ChooseLocationScreen() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getLocation = async () => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Permission denied!");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    } catch (error) {
      console.log(error);
      alert("Could not get location");
    }
  };

  return (
    <View style={styles.container}>
      {/* MAP */}
      <MapView style={styles.map} showsUserLocation />

      {/* LOCATION BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={getLocation}
      >
        <Ionicons
          name="location-sharp"
          size={18}
          color="#fff"
        />
        <Text style={styles.buttonText}>
          Use Current Location
        </Text>
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>
          Confirm Location
        </Text>

        <Text style={styles.address}>
          {location
            ? `${location.latitude}, ${location.longitude}`
            : "Getting your location..."}
        </Text>

        <Text style={styles.subTitle}>
          Nearby Stations
        </Text>

        <Text style={styles.item}>
          • Riverside Detailing
        </Text>

        <Text style={styles.item}>
          • Brookside Car Care
        </Text>

        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>
            Confirm Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  button: {
    position: "absolute",
    top: 60,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff7a00",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 8,
  },

  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    elevation: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },

  address: {
    fontSize: 14,
    color: "#444",
    marginBottom: 15,
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  item: {
    fontSize: 14,
    color: "#555",
    marginLeft: 10,
  },

  confirmBtn: {
    backgroundColor: "#ff7a00",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },

  confirmText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
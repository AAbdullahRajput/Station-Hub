import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function LogoutScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* ICON */}
        <View style={styles.iconCircle}>
          <Ionicons name="log-out-outline" size={32} color="#FF7A45" />
        </View>

        <Text style={styles.title}>Logout</Text>

        <Text style={styles.message}>
          Are you sure you want to log out?
        </Text>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 10,
  },

  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#FFF1EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },

  message: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },

  cancelBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#FF7A45",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  logoutBtn: {
    flex: 1,
    backgroundColor: "#FF7A45",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  cancelText: {
    color: "#FF7A45",
    fontWeight: "600",
    fontSize: 15,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
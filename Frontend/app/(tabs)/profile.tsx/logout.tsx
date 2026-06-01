import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LogoutScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // 👉 yahan baad mein backend token clear hoga
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
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

/* ================= STYLES ================= */

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
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  message: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  cancelBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#FF7A45",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },

  logoutBtn: {
    flex: 1,
    backgroundColor: "#FF7A45",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  cancelText: {
    color: "#FF7A45",
    fontWeight: "600",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },
});
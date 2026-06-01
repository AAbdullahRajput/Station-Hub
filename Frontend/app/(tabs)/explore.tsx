import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [search, setSearch] = useState("");

  const services = [
    {
      id: "1",
      name: "Car Wash",
      image: require("../../assets/images/service1.png"),
    },
    {
      id: "2",
      name: "Detailing",
      image: require("../../assets/images/service2.png"),
    },
    {
      id: "3",
      name: "Engine Check",
      image: require("../../assets/images/service3.png"),
    },
    {
      id: "4",
      name: "Interior Cleaning",
      image: require("../../assets/images/service4.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Good Morning</Text>
          <Text style={styles.title}>Find Services</Text>
        </View>

        <Ionicons name="notifications-outline" size={24} />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Search services..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* LIST */}
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <Text style={styles.sectionTitle}>Popular Services</Text>

        <View style={styles.grid}>
          {services
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <TouchableOpacity key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },

  smallText: {
    fontSize: 12,
    color: "#888",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderRadius: 12,
    height: 45,
    elevation: 2,
  },

  input: {
    marginLeft: 8,
    flex: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    margin: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },

  cardText: {
    marginTop: 8,
    fontWeight: "600",
  },
});
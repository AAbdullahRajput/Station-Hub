import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ServiceScreen() {
  const router = useRouter();
  const [tab, setTab] = useState("basic");

  const data: any = {
    basic: [
      { title: "Basic Wash", desc: "Exterior + vacuum" },
      { title: "Quick Clean", desc: "Fast service" },
    ],
    premium: [
      { title: "Full Detailing", desc: "Deep clean interior + exterior" },
    ],
    addons: [
      { title: "Tyre Polish", desc: "Shiny tyres" },
    ],
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Services</Text>

      {/* TABS */}
      <View style={styles.tabRow}>
        {["basic", "premium", "addons"].map((item) => (
          <TouchableOpacity key={item} onPress={() => setTab(item)}>
            <Text style={[styles.tab, tab === item && styles.active]}>
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <ScrollView>
        {data[tab].map((item: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              router.push({
                 pathname: "/(tabs)/service/[type]",
                params: {
                  type: tab,
                  title: item.title,
                  desc: item.desc,
                },
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDEBDD", paddingTop: 50 },
  header: { fontSize: 22, fontWeight: "700", textAlign: "center" },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },

  tab: { color: "#888", fontWeight: "600" },

  active: {
    color: "#FF8C42",
    borderBottomWidth: 2,
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },

  title: { fontWeight: "700" },
  desc: { color: "#777" },
});
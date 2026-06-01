import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, Feather } from "@expo/vector-icons";
import Bottomnav from "@/components/Bottomnav";

export default function ManageProfileScreen() {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
 const [image, setImage] = useState<string | null>(null);
  const [focusedInput, setFocusedInput] = useState("");

  /* IMAGE PICKER */

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission Required",
        "Please allow gallery access."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
  setImage(result.assets[0].uri);
}
  };

  /* SAVE */

  const handleSave = () => {
    if (!name || !phone || !email) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }

    Alert.alert("Success", "Profile updated successfully.");
  };

  /* DISCARD */

  const handleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TOP GRADIENT */}
      <LinearGradient
        colors={["#FFE4DA", "#FFF4EC", "#FFFFFF"]}
        style={styles.gradient}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#1A1A1A"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Manage your profile
          </Text>

          <View style={{ width: 24 }} />
        </View>

        {/* PROFILE CARD */}
        <View style={styles.card}>
          {/* AVATAR */}

          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={pickImage}
            activeOpacity={0.8}
          >
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../../../assets/images/johndoe.png")
              }
              style={styles.avatar}
            />

            <View style={styles.cameraIcon}>
              <Feather name="camera" size={16} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.changeText}>
            Change Profile Picture
          </Text>

          {/* NAME */}

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              Name <Text style={{ color: "red" }}>*</Text>
            </Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="John Doe"
              placeholderTextColor="#9CA3AF"
              style={[
                styles.input,
                {
                  borderBottomColor:
                    focusedInput === "name"
                      ? "#FF7A45"
                      : "#E5E7EB",
                },
              ]}
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput("")}
            />
          </View>

          {/* PHONE */}

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              Phone Number{" "}
              <Text style={{ color: "red" }}>*</Text>
            </Text>

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your Phone Number"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              style={[
                styles.input,
                {
                  borderBottomColor:
                    focusedInput === "phone"
                      ? "#FF7A45"
                      : "#E5E7EB",
                },
              ]}
              onFocus={() => setFocusedInput("phone")}
              onBlur={() => setFocusedInput("")}
            />
          </View>

          {/* EMAIL */}

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              E-mail Address{" "}
              <Text style={{ color: "red" }}>*</Text>
            </Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your E-mail Address"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                styles.input,
                {
                  borderBottomColor:
                    focusedInput === "email"
                      ? "#FF7A45"
                      : "#E5E7EB",
                },
              ]}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput("")}
            />
          </View>

          {/* BUTTONS */}

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={handleSave}
            >
              <Text style={styles.saveText}>
                Save Change
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.discardBtn}
              onPress={handleDiscard}
            >
              <Text style={styles.discardText}>
                Discard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Bottomnav />
    </SafeAreaView>
  );
}

/* ====================== STYLES ====================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 220,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  /* CARD */

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },

  /* AVATAR */

  avatarContainer: {
    alignSelf: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FF7A45",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },

  changeText: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 28,
    fontSize: 14,
  },

  /* INPUT */

  inputWrapper: {
    marginBottom: 22,
  },

  label: {
    color: "#FF7A45",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: 15,
    color: "#1A1A1A",
  },

  /* BUTTONS */

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 12,
  },

  saveBtn: {
    flex: 1,
    backgroundColor: "#FF7A45",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },

  saveText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },

  discardBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#FF7A45",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  discardText: {
    color: "#FF7A45",
    fontWeight: "600",
    fontSize: 15,
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#ffd7bd", "#fff7f2", "#ffffff", "#fff7f2", "#ffd7bd"]}
      locations={[0, 0.3, 0.5, 0.7, 1]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>

        {/* LOGO */}
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />

        <Text style={styles.heading}>Create Your Account</Text>

        {/* FULL NAME */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        {/* PHONE */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your Phone Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail Address</Text>
          <TextInput
            placeholder="Enter your E-mail Address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              placeholder="********"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              style={styles.input}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#ff7a00"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CONFIRM PASSWORD */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              placeholder="********"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirm}
              style={styles.input}
            />

            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#ff7a00"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/set-location")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* LOGIN */}
        <Text style={styles.loginText}>
          Already a user?{" "}
          <Text
            style={styles.login}
           onPress={() => router.push("/login")}
          >
            Log In
          </Text>
        </Text>

        {/* TERMS */}
        <Text style={styles.terms}>
          View our <Text style={styles.link}>Terms of use</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 25,
    paddingTop: 60,
  },

  logo: {
    width: 120,
    height: 90,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 15,
  },

  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1f2b3d",
    textAlign: "center",
    marginBottom: 25,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    color: "#ff7a00",
    fontSize: 13,
    marginBottom: 5,
    fontWeight: "600",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ffb37a",
    paddingVertical: 10,
    fontSize: 14,
    color: "#222",
  },

  passwordBox: {
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "#ffb37a",
  width: "100%",
  justifyContent: "space-between",
},

  button: {
    backgroundColor: "#ff8a00",
    height: 52,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  loginText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: "#444",
  },

  login: {
    color: "#ff7a00",
    fontWeight: "700",
  },

  terms: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 11,
    color: "#666",
  },

  link: {
    color: "#ff7a00",
  },
});
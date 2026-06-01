import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function LandingPage() {
  return (
    <ImageBackground
  source={require("../../assets/images/signup.png")}
  style={styles.background}
>
      {/* Dark overlay for better text visibility */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.container}>

        {/* Logo */}
       <Image
  source={require("../../assets/images/Logo.png")}
  style={styles.logo}
/>
        {/* Title */}
        <Text style={styles.title}>
          All Service Stations. One Hub
        </Text>

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Terms */}
       <Text style={styles.terms}>
  View our <Text style={{ color: "#ff7a00" }}>Terms of Use</Text> &{" "}
  <Text style={{ color: "#ff7a00" }}>Privacy Policy</Text>
</Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  signupBtn: {
    backgroundColor: "#ff7a00",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginBtn: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginText: {
    color: "#000",
    fontWeight: "bold",
  },
  terms: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
  },
});
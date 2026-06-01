import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function ResetPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo */}
      <View style={styles.logocolumn}>
        <Image
          source={require("../../assets/images/Logo.png")}
           //style={styles.logoImg}
        />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Reset Password</Text>

      {/* Sub Text */}
      <Text style={styles.subText}>
        Enter your email or phone number to reset your password
      </Text>

      {/* Email */}
      <Text style={styles.label}>E-mail Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your E-mail Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* OR */}
      <Text style={styles.orText}>OR</Text>

      {/* Phone */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Info */}
      <Text style={styles.infoText}>
        We will send a verification code to your account 
      </Text>

      {/* Send OTP */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.loginBtnText}>Back to Login</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.terms}>
        View our{" "}
        <Text style={styles.termsLink}>Terms of Use</Text>
        {" "}and{" "}
        <Text style={styles.termsLink}>Privacy Policy</Text>
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff7f2",
    padding: 20,
    justifyContent: "center",
  },

  logocolumn: {
    alignItems: "center",
    marginBottom: 15,
  },

  logoImg: {
    width: 210,
    height: 210,
    resizeMode: "contain",
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#1d2b53",
    marginBottom: 10,
  },

  subText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginBottom: 25,
    paddingHorizontal: 10,
  },

  label: {
    color: "#ff7a00",
    fontSize: 13,
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ff7a00",
    paddingVertical: 8,
    marginBottom: 10,
  },

  orText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "#1d2b53",
    marginVertical: 10,
  },

  infoText: {
    textAlign: "left",
    color: "#666",
    fontSize: 13,
    marginTop: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#e77605",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  loginBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  loginBtnText: {
    color: "#1d2b53",
    fontSize: 16,
    fontWeight: "600",
  },

  terms: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    color: "#666",
  },

  termsLink: {
    color: "#ff7a00",
    fontWeight: "500",
  },
});
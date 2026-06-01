// verify-otp.jsx

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

export default function VerifyOTP() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={styles.subText}>
        We sent a 6-digit code to your email/phone
      </Text>

      <Text style={styles.label}>Enter OTP</Text>

      <View style={styles.otpRow}>
        {otp.map((item, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
          />
        ))}
      </View>

      <Text style={styles.resend}>
        Didn't receive the code?{" "}
        <Text style={styles.orange}>Resend</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/newpassword")}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.whiteBtn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.whiteBtnText}>Back to Login</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        View our <Text style={styles.orange}>Terms of Use</Text> and{" "}
        <Text style={styles.orange}>Privacy Policy</Text>
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff5ee",
    padding: 22,
    justifyContent: "center",
  },

  logoBox: {
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#1b2945",
  },

  subText: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
    marginTop: 8,
    marginBottom: 28,
  },

  label: {
    color: "#ff7a00",
    fontSize: 12,
    marginBottom: 8,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  otpBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#ff7a00",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },

  resend: {
    fontSize: 11,
    color: "#555",
    marginBottom: 18,
  },

  orange: {
    color: "#ff7a00",
  },

  button: {
    backgroundColor: "#ff9100",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#000",
    fontWeight: "700",
  },

  whiteBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ff7a00",
    alignItems: "center",
  },

  whiteBtnText: {
    color: "#ff7a00",
    fontWeight: "600",
  },

  terms: {
    textAlign: "center",
    fontSize: 11,
    color: "#555",
    marginTop: 20,
  },
});
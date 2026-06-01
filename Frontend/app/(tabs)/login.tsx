import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      
      {/* Logo / Title */}
      <View style={styles.logocolumn}>
        <Image
          source={require("../../assets/images/Logo.png")} // StationHub logo
          // style={styles.logoImg}
        />
        {/* <Text style={styles.title}>StationHub</Text> */}
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Log in to your account</Text>

      {/* Inputs */}
      <Text style={styles.label}>E-mail Address or Phone Number*</Text>
      <TextInput
        placeholder="Enter Email or Phone"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password*</Text>
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Signup */}
      <Text style={styles.signup}>
        New user? <Text style={styles.link}>Create an Account</Text>
      </Text>

      <Text style={styles.or}>OR CONTINUE WITH</Text>

      {/* Social Buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("../../assets/images/google_logo.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("../../assets/images/apple.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Terms of Use */}
      <Text style={styles.terms}>
        View our Terms of use and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Beige background for whole screen
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-start", 
    paddingTop: 60,
    backgroundColor: "#FFF4EC"   // single beige base color
  },

  // Logo center upar
  logocolumn: { alignItems: "center", marginBottom: 10 },
  // logoImg: { width: 220, height: 220, marginBottom: 12 }, // bigger logo
 title: { 
  fontSize: 34, // text thoda bada aur bold
  fontWeight: "bold", 
  color: "#1F2D3D", 
  marginTop: 0 // unnecessary margin hata diya
},
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 15, color: "#1F2D3D", textAlign: "center" },

  // Inputs
  label: { fontSize: 12, color: "#FF7A00", marginTop: 10, alignSelf: "flex-start", marginLeft: "5%" },
  input: { borderWidth: 1, borderColor: "#FFD2B3", borderRadius: 10, padding: 12, marginTop: 5, backgroundColor: "#fff", width: "90%" },

  // Forgot password
  forgot: { marginTop: 10, color: "#FF7A00", fontSize: 12, alignSelf: "flex-start", marginLeft: "5%" },

  // Login button
  button: { backgroundColor: "#FF7A00", padding: 15, borderRadius: 30, marginTop: 20, width: "90%" },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 16 },

  // Signup link
  signup: { textAlign: "center", marginTop: 15, fontSize: 13 },
  link: { color: "#FF7A00", fontWeight: "bold" },

  // Divider
  or: { textAlign: "center", marginTop: 20, fontSize: 12, color: "#999" },

  // Social buttons row
  socialRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 15, width: "90%" },
  socialBtn: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 10, width: "40%", justifyContent: "center", backgroundColor: "#F9F9F9" },
  socialIcon: { width: 20, height: 20, marginRight: 8 },
  socialText: { fontWeight: "600", color: "#1F2D3D" },

  // Terms of Use
  terms: { textAlign: "center", marginTop: 30, fontSize: 11, color: "#999" },
});

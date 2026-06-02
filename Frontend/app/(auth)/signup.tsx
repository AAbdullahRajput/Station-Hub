import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE = "http://192.168.18.87:8000";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });
  const router = useRouter();

  const showToast = (message: string) => {
  setToast({ visible: true, message, type: "success" });
  setTimeout(() => {
    setToast({ visible: false, message: "", type: "success" });
    router.replace("/login");
  }, 2000);
};

const showError = (message: string) => {
  setToast({ visible: true, message, type: "error" });
  setTimeout(() => {
    setToast({ visible: false, message: "", type: "success" });
  }, 2500);
};

  const handleSignup = async () => {
    if (!fullName || !phone || !email || !password || !confirmPassword) {
      showError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      showError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      showError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem("token", data.token);
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        showToast("Account Created Successfully!");
      } else {
        showError(data.detail || "Signup failed");
      }
    } catch (error) {
      showError("Cannot connect to server");
    } finally {
      setLoading(false);
    }
  };

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
            value={fullName}
            onChangeText={setFullName}
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
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail Address</Text>
          <TextInput
            placeholder="Enter your E-mail Address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* LOGIN */}
        <Text style={styles.loginText}>
          Already a user?{" "}
          <Text style={styles.login} onPress={() => router.push("/login")}>
            Log In
          </Text>
        </Text>

        {/* TERMS */}
        <Text style={styles.terms}>
          View our <Text style={styles.link}>Terms of use</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

      </ScrollView>

      {/* TOAST */}
      {toast.visible && (
  <View style={[styles.toast, { backgroundColor: toast.type === "error" ? "#e74c3c" : "#ff8a00" }]}>
    <Text style={styles.toastText}>
      {toast.type === "error" ? "✕ " : "✓ "}{toast.message}
    </Text>
  </View>
)}

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

  toast: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#ff8a00",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 10,
  },

  toastText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
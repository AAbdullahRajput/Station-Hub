import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectUri = AuthSession.makeRedirectUri({
    scheme: "stationhubapp",
  });

  console.log("Google redirect URI:", redirectUri);

  // ✅ GOOGLE AUTH
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "971946675746-ur3nn6fo2tng6n9hqpervji0c31baf83.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    redirectUri,
  });

  useEffect(() => {
    if (response?.type === "success") {
      router.replace("/set-location");
    }
  }, [response]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.card}>

        {/* LOGO */}
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TITLE */}
        <Text style={styles.heading}>Welcome Back 👋</Text>
        <Text style={styles.subText}>Login to continue</Text>

        {/* EMAIL */}
        <Text style={styles.label}>Email or Phone</Text>
        <TextInput
          placeholder="Enter Email or Phone"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* FORGOT */}
        <Text
          style={styles.forgot}
          onPress={() => router.push("/reset-password")}
        >
          Forgot Password?
        </Text>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.replace("/set-location")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.or}>OR</Text>

        {/* GOOGLE BUTTON */}
        <TouchableOpacity
          style={styles.googleBtn}
          disabled={!request}
          onPress={() => promptAsync()}
        >
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* SIGNUP */}
        <Text style={styles.signup}>
          New user?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/signup")}
          >
            Create Account
          </Text>
        </Text>

      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4EC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    elevation: 10,
  },

  logo: {
    width: 95,
    height: 95,
    alignSelf: "center",
    marginBottom: 10,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2D3D",
    textAlign: "center",
  },

  subText: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    color: "#FF7A00",
    marginTop: 12,
  },

  input: {
    backgroundColor: "#F6F6F6",
    padding: 13,
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },

  forgot: {
    color: "#FF7A00",
    fontSize: 12,
    textAlign: "right",
    marginTop: 8,
  },

  loginBtn: {
    backgroundColor: "#FF7A00",
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },

  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  or: {
    textAlign: "center",
    marginVertical: 15,
    color: "#aaa",
  },

  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 12,
  },

  googleIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },

  googleText: {
    fontWeight: "600",
    color: "#333",
  },

  signup: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 13,
  },

  link: {
    color: "#FF7A00",
    fontWeight: "bold",
  },
});
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  Image,
} from "react-native";

import { router } from "expo-router";

export default function SplashScreen() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      router.replace("/onboarding" as any);
    });
  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <ImageBackground
      source={require("../../assets/images/Splash.png")}
      style={styles.container}
    >
      <View style={styles.overlay}>

        {/* LOGO */}
        <Image
          source={require("../../assets/images/splashlogo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Station Hub</Text>

        <Text style={styles.subtitle}>
          All Service Stations. One Hub.
        </Text>

        <Text style={styles.loading}>Loading...</Text>

        <View style={styles.bar}>
          <Animated.View
            style={[styles.progress, { width: widthInterpolated }]}
          />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 210,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#fff",
    marginBottom: 250,
  },

  loading: {
    color: "#fff",
    marginBottom: 10,
  },

  bar: {
    width: 180,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: "orange",
    borderRadius: 20,
  },
});
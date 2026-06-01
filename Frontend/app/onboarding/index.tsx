import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ViewToken,
  StatusBar,
} from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Find Nearby Services",
    desc: "Discover car wash, repair, fuel and more service stations near you in seconds",
    image: require("../../assets/images/onboard1.png"),
  },
  {
    id: "2",
    title: "Book Instantly",
    desc: "Choose your service, select a time slot, and book instantly with just a few taps",
    image: require("../../assets/images/ON2.png"),
  },
  {
    id: "3",
    title: "Explore All Service Stations",
    desc: "Browse and compare all service stations across your city and find the best option",
    image: require("../../assets/images/ON3.png"),
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0]?.index ?? 0);
      }
    }
  ).current;

  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 60,
  }).current;

  const handleContinue = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/landingpage");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={styles.slide}>
            
            {/* DARK OVERLAY */}
            <View style={styles.overlay} />

            {/* TEXT (UPPER AREA) */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>

            {/* DOTS (JUST BELOW TEXT) */}
            <View style={styles.dotsFloating}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>

          </ImageBackground>
        )}
      />

      {/* BUTTON FIXED AT BOTTOM */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? "Get Started" : "Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  slide: {
    width,
    height,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  textContainer: {
    position: "absolute",
    bottom: 220,
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },

  desc: {
    fontSize: 15,
    color: "#E5E5E5",
    lineHeight: 22,
  },

  dotsFloating: {
    position: "absolute",
    bottom: 170,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: "#FF8C42",
  },

  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    paddingHorizontal: 25,
  },

  button: {
    backgroundColor: "#FF8C42",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#FF8C42",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
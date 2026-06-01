import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Booking/booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Booking/bookingconfirm"
        options={{
          title: "Booking Confirm",
          href: null,
        }}
      />

      <Tabs.Screen
        name="service/index"
        options={{
          title: "Services",
          href: null,
        }}
      />

      <Tabs.Screen
        name="service/[type]"
        options={{
          title: "Service Details",
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/manageprofile"
        options={{
          title: "Manage Profile",
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile/bookinghistory"
        options={{
          title: "Booking History",
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile/profilesetting"
        options={{
          title: "Profile Settings",
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile/logout"
        options={{
          title: "Logout",
          href: null,
        }}
      />

      <Tabs.Screen
        name="Favourite"
        options={{
          title: "Favorite",
          href: null,
        }}
      />

      <Tabs.Screen
        name="Home/home"
        options={{
          title: "Home Detail",
          href: null,
        }}
      />

      <Tabs.Screen
        name="Home/stationdetail"
        options={{
          title: "Station Detail",
          href: null,
        }}
      />
    </Tabs>
  );
}
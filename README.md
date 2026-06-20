<div align="center">

# 📱 Station Hub App

> A React Native (Expo) mobile app for discovering nearby travel stations and booking seats on the go.

[![Expo](https://img.shields.io/badge/Mobile-Expo-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-Expo%20Router-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)

</div>

---

## 📖 About

**Station Hub App** is the passenger-facing mobile app of the Station Hub platform. It lets users discover nearby travel stations based on their location, browse station details and services, and book seats for a trip — all from a clean, easy-to-use mobile interface.

---

## ✨ Features

- 🔐 **Authentication** — Secure sign up / login with JWT-based sessions
- 📍 **Location-Based Discovery** — Find nearby stations using device location
- 🗺️ **Set/Choose Location** — Manually set or change location for more relevant results
- 🚏 **Station Browsing** — View station details, amenities, and available services
- 🎫 **Seat Booking** — Book seats with from/to location, travel date, time, and seat count
- 🎬 **Onboarding & Splash Flow** — Smooth first-launch experience for new users
- 👤 **Profile Management** — View and update personal info
- ⚙️ **Settings** — Manage app preferences

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|---------------------------------------|
| Framework    | React Native + Expo (Expo Router)     |
| Navigation   | React Navigation (bottom tabs)        |
| Auth Backend | FastAPI + Firebase Admin SDK          |
| Storage      | AsyncStorage (local session caching)  |
| Location     | expo-location                         |
| Build/Deploy | EAS Build                             |

---

## 📂 Project Structure

```
Station Hub App/
└── Frontend/
    ├── app/
    │   ├── (auth)/         # Login & signup screens
    │   ├── (tabs)/          # Main tab navigation screens
    │   ├── onboarding/      # First-launch onboarding flow
    │   ├── splash/          # Animated splash screen
    │   ├── set-location.tsx
    │   ├── choose-location.tsx
    │   └── index.tsx
    ├── components/          # Reusable UI (BottomNav, themed components, etc.)
    ├── constants/           # Theme configuration
    ├── hooks/               # Custom hooks (color scheme, theme color)
    └── utils/firebase.ts    # Firebase client setup
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/AAbdullahRajput/Station-Hub-Project.git
cd "Station Hub App/Frontend"
npm install
npx expo start
```

Scan the QR code with the **Expo Go** app, or run on an emulator:

```bash
npx expo start --android
# or
npx expo start --ios
```

### Building for Production

```bash
eas build --platform android
```

---

## 🔐 Security Note

Sensitive files such as `google-services.json` and Firebase credentials are excluded via `.gitignore` and should never be committed to version control. If a key is ever accidentally exposed, revoke it immediately and scrub it from git history.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AAbdullahRajput/Station-Hub-Project/issues).

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">📱 Built with React Native + Expo</p>

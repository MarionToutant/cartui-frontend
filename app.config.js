const dotenv = require("dotenv");
dotenv.config();

export default {
    expo: {
      name: "Cartui",
      slug: "Cartui",
      platforms: [
        "ios",
        "android",
        "web"
      ],
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      updates: {
        fallbackToCacheTimeout: 0
      },
      assetBundlePatterns: [
        "**/*"
      ],
      ios: {
        bundleIdentifier: "com.toutenm.cartui",
        buildNumber: "1.0.0",
        supportsTablet: true
      },
      android: {
        package: "com.toutenm.cartui",
        versionCode: 1,
        config: {
            googleMaps: {
              apiKey: process.env.REACT_NATIVE_MAPS_API_KEY
            }
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      } /*,
      extra: {
        backendURL: process.env.REACT_NATIVE_BACKEND_URL
      } */
    }
}
  
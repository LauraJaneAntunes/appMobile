module.exports = {
    preset: "jest-expo",
    setupFilesAfterEnv: ["<rootDir>/jest/setupTests.js"],
    transformIgnorePatterns: [
      "node_modules/(?!react-native|@react-native|react-navigation|expo)"
    ]
  };
  
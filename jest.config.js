export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
};

module.exports = {
  setupFilesAfterEnv: ["jest-extended/all"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!accessible-menu/)",
    "\\.pnp\\.[^\\/]+$",
  ],
};

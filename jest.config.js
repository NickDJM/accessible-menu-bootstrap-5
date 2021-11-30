module.exports = {
  setupFilesAfterEnv: ["jest-extended/all"],
  testEnvironment: "jest-environment-jsdom-latest",
  transformIgnorePatterns: [
    "/node_modules/(?!accessible-menu/)",
    "\\.pnp\\.[^\\/]+$",
  ],
};

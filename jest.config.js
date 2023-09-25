process.env.TZ = "UTC";

module.exports = {
  // moduleFileExtensions: ["ts", "tsx", "js"],
  // // preset: "ts-jest",
  // transform: {
  //   "^.+\\.(t|j)sx?$": ["babel-jest"],
  // },
  // testMatch: ["**/*.(test).(ts|tsx)"],
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // modulePaths: ["<rootDir>/"],
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "identity-obj-proxy",
  //   "\\.(css|less|scss)$": "identity-obj-proxy",
  // },
  // coverageDirectory: "jest-coverage",
  coverageReporters: ["json-summary", "text", "lcov"],
  // collectCoverageFrom: [
  //   "./actions/**/*.ts",
  //   "./api/**/*.ts",
  //   "./components/**/*.(ts|tsx)",
  //   "./expenditure/**/*.ts",
  //   "./pages/**/*.ts",
  //   "./schema/**/*.ts",
  //   "./server/**/*.ts",
  //   "./services/**/*.ts",
  //   "./store/**/*.ts",
  //   "./styles/**/*.ts",
  //   "!./**/*.d.*",
  //   "!./**/types.ts",
  //   "!./**/*.stories.*",
  //   "!./expenditure/(constants|events|fixtures).ts",
  //   "!./pages/api/mocks/**/*",
  // ],
  // coverageThreshold: {
  //   "**/*.ts": {
  //     statements: 0,
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //   },
  //   "**/*.tsx": {
  //     statements: 0,
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //   },
  // },
  // watchPathIgnorePatterns: [
  //   "<rootDir>/\\.next/",
  //   "<rootDir>/bin/",
  //   "<rootDir>/node_modules/",
  // ],
  // clearMocks: true,
};

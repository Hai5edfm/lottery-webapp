// eslint-disable-next-line import/extensions
import nextJest from "next/jest.js"
import type { Config } from "jest"

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const config: Config = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  // Add more setup options before each test is run
  setupFiles: ["<rootDir>/jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

module.exports = {
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/test/setup.ts"
  ],
  "testMatch": [
    "**/test/*-spec.ts"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}

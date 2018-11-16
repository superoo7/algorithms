module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "Utils/(.*)": "<rootDir>/src/Utils/$1"
  }
};
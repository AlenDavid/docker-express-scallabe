// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]s?$": "babel-jest"
  }
};
export default config;
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'https://restful-api.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
};

export default config;
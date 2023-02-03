import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {},
    specPattern: 'cypress/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
});

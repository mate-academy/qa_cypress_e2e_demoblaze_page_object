const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1280,
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
    }
  }
});

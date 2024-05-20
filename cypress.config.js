const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    retries: 5,
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUserData() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            name: `YuriiMV${randomNumber}`,
            country: `Ukraine${randomNumber}`,
            city: `Secret${randomNumber}`,
            card:
              Math.floor(Math.random() * 1000000000000000) + 1000000000000000,
            month: Math.floor(Math.random() * 11) + 1,
            year: Math.floor(Math.random() * 200) + 1950
          };
        }
      });
    }
  }
});

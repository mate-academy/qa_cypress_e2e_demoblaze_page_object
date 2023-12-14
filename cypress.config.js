const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            name: faker.person.firstName(),
            country: faker.location.country(),
            city: faker.location.city(),
            card: faker.finance.creditCardNumber(),
            month: faker.number.int({ min: 1, max: 12 }),
            year: '2024'

          };
        }
      });
    },
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1320
  }
});

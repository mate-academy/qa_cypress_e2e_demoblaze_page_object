const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateTestData() {
          return {
            name: faker.name.findName(),
            country: faker.address.country(),
            city: faker.address.city(),
            card: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.random.number({ min: 1990, max: 2020 })
          };
        }
      });
    }
  }
});

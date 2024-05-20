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
            creditCard: faker.finance.creditCardNumber(),
            creditMonth: 'May',
            creditYear: '2024'
          };
        },
      });
    },
  },
});

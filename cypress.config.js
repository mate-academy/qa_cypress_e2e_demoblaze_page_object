const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateDataForUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.creditCardNumber(),
            year: new Date().getFullYear(),
            month: faker.datatype.number({ min: 1, max: 12 })
          };
        }
      });
    }
  }
});

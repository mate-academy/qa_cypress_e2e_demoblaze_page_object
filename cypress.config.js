const { faker } = require('@faker-js/faker');
const moment = require('moment');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    // defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      on('task', {
        generateUserData() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          const username = faker.person.firstName() + `${randomNumber}`;

          return {
            username,
            email: `test${username}@mail.com`,
            password: 'Password12345!'
          };
        },

        placeOrderFormData() {
          return {
            name: faker.person.firstName(),
            country: faker.location.country(),
            city: faker.location.city(),
            creditCard:
              faker.finance.creditCardNumber('6379-####-####-####'),
            month: moment().format('MM'),
            year: moment().format('YYYY')
          };
        }
      });
    }
  }
});

const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.person.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            country: faker.location.country(),
            city: faker.location.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: Math.floor(1950 + Math.random() * 20)
          };
        }
      });
    }
  }
});

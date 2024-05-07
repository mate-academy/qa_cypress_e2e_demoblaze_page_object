const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          const randomYear = Math.floor(Math.random(5) + 2024);
          return {
            username: faker.person.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            name: faker.person.firstName(),
            country: faker.location.country(),
            city: faker.location.city(),
            card: faker.finance.creditCardNumber({ issuer: 'visa' }),
            month: faker.date.month(),
            year: randomYear
          };
        }
      });
    }
  }
});

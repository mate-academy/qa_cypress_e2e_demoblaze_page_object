const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.account(16),
            month: faker.date.month(),
            year: Math.floor(Math.random() * 10) + 2023
          };
        }
      });
    }
  }
});

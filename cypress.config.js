const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
        },
        generateOrderData() {
          return {
            name: faker.name.firstName(),
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
            year: Math.floor(Math.random() * (2040 - 2023 + 1)) + 2023
          };
        }
      });
    }
  }
});

const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1900,
    viewportWidth: 1200,
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
        generatePlaceOrderInfo() {
          return {
            name: faker.name.firstName(),
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.random.number({ min: 2023, max: 2030 }).toString()
          };
        },
      })
    }
  }
});

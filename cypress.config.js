const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',

    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.random().toString().slice(3, 2);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
        },
        generateOrderData() {
          const randomDigit = Math.random().toString().slice(3, 9);
          return {
            name: faker.name.firstName() + randomDigit,
            country: faker.address.country(),
            city: faker.address.city(),
            card: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.random.number({ min: 2024, max: 2030 })
          };
        }
      });
    }
  }
});

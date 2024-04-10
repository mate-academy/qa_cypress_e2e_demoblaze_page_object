const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random() * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
        },
        generateCustomer() {
          return {
            firstName: faker.name.firstName(),
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.creditCardNumber(),
            monthOfBirth: faker.date.month(),
            yearOfBirth: faker.datatype.number({ min: 1900, max: 2022 })
          };
        }
      });
    }
  }
});

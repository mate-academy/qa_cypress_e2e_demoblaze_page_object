const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateCustomer() {
          const randomNumber = Math.ceil(Math.random() * 1000);
          return {
            username: faker.person.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            category: 'Laptops',
            productName: 'Sony vaio i7',
            firstName: faker.person.firstName(),
            country: faker.location.country(),
            city: faker.location.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.number.int({ min: 2024, max: 2040 })
          };
        }
      });
    }
  }
});

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
            password: 'Password12345!'
          };
        },
        generateCustomer() {
          return {
            category: 'Laptops',
            product: 'Sony vaio i7',
            firstName: faker.name.firstName(),
            country: faker.address.country(),
            city: faker.address.city(),
            creditCard: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.datatype.number({min: 2024, max: 2029 }),
          };
        }
      })
    }
  }
});

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
            password: 'Password12345!'
          };
        },
        generateOrderInfo() {
          const name = faker.person.firstName();
          const country = faker.location.country();
          const city = faker.location.city();
          const creditCardNumber = faker.finance.creditCardNumber();
          const month = faker.date.month();
          const year = Math.ceil(Math.random() * 30) + 2000;

          return {
            name, country, city, creditCardNumber, month, year
          };
        }
      });
    }
  }
});

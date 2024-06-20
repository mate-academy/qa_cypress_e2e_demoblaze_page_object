const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        placeOrder() {
          const minYear = 1920;
          const maxYear = 2005;
          // eslint-disable-next-line max-len
          const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
          const successMessage = 'Thank you for your purchase!';
          return {
            name: faker.name.firstName(),
            city: faker.address.city(),
            country: faker.address.country(),
            card: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            randomYear,
            successMessage
          };
        }
      });
    }
  }
});

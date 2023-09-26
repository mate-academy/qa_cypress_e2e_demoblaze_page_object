const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateData() {
          const randomName = faker.name.findName();
          const randomCountry = faker.address.country();
          const randomCity = faker.address.city();
          const randomCreditCard = faker.finance.creditCardNumber();
          const randomMonth = faker.date.month();
          const randomYear = faker.random.number({ min: 1900, max: 2100 });
          const productName = 'Sony vaio i7';
          return {
            randomName,
            randomCountry,
            randomCity,
            randomCreditCard,
            randomMonth,
            randomYear,
            productName
          };
        }
      });
    }
  }
});

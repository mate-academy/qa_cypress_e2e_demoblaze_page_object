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
            email: faker.internet.email(),
            password: 'Password12345!',

          };
        }
      })

      on('task', {
        createPlaceOrderUser() {
    
          return {
            name: faker.name.firstName(),
            country: faker.address.country(),
            city: faker.address.city(),
            credit_card: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: faker.random.number({ min: 2020, max: new Date().getFullYear() })

          };
        }
      })
    }
  }
});

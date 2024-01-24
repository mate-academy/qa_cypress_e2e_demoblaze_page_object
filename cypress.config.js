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
            country: 'USA',
            city: 'LA',
            card: '1111111111111111',
            month: '4',
            year: '1991',
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            product: 'Sony vaio i7'
          };
        }
      });
    }
  }
});

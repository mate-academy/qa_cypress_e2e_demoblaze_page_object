const { defineConfig } = require('cypress');
const faker = require('faker');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: 'Password12345!'
          };
        }
      });
    }
  }
});

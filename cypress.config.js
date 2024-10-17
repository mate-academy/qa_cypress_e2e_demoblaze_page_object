const { faker } = require('@faker-js/faker');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    defaultCommandTimeout: 10000,
    execTimeout: 16000,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: `${randomNumber}` + 'test' + '@mail.com',
            password: 'Password12345!'
          };
        }
      });
    }
  }
});

const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  viewportHeight: 1440,
  viewportWidth: 1920,
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
        }
      });
    }
  }
});

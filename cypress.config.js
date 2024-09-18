const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          const randomMonth = Math.ceil(Math.random(1000) * 12);
          const randomYear = Math.ceil(Math.random(1000) * 2024);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            country: faker.lorem.word(),
            city: faker.lorem.word(),
            card: faker.lorem.word(),
            month: randomMonth,
            year: randomYear
          };
        }
      });
    }
  }
});

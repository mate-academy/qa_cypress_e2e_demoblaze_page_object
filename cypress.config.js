const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 800,
    pageLoadTimeout: 80000,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);


          return {
            username: faker.person.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            name: faker.person.firstName(),
            country: faker.location.city(),
            city: faker.location.city(),
            card: Math.floor(Math.random() * 1000000000000000),
            date: {
              month: Math.ceil(Math.random() * 12),
              year: Math.floor(2000 + Math.random() * 20)
            },
          };
        }
      })
    }
  }
});

const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1100,
    viewportWidth: 1320,
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName(),
            // country: faker.location.country(),
            country: 'Ukraine',
            // city: faker.location.city(),
            city: 'Lviv',
            card: faker.phone.phoneNumber('####-####-####-####'),
            month: faker.date.month(),
            year: Math.floor(2024 + Math.random() * 5)
          };
        }
      })
    }
  }
});

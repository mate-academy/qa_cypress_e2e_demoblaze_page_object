const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1080,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
        },
        generateTestData() {
          const randomDigit = Math.floor(Math.random() * 40) + 15;
          return {
            name: faker.name.firstName() + randomDigit,
            country: faker.address.country(),
            city: faker.address.city(),
            card: faker.random.number({ max: 4001234567891234 }),
            month: faker.random.number({ min: 1, max: 12 }),
            year: faker.random.number({ min: 2024, max: 2027 })
          };
        }
      });
    }
  }
});

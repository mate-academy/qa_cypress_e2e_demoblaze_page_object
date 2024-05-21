const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {

    generateUser() {
      const randomNumber = Math.ceil(Math.random(1000) * 1000);
      return {
        username: faker.person.firstName() + `${randomNumber}`,
        email: 'test' + `${randomNumber}` + '@mail.com',
        password: 'Password12345!',
        name: faker.person.firstName(),
        country: faker.location.country(),
        city: faker.location.city(),
        card: faker.finance.creditCardNumber(),
        month: faker.date.month(),
        year: '2024'
      };
    }
  },
});

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!',
            country: 'Ukraine',
            city: 'Odesa',
            cart: randomNumber('################'),
            month: faker.date.month(),
            year: Math.floor(1970 + Math.random() * 10),
          };
        }
      })
    }
  }
});

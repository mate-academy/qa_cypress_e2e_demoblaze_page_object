const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1200,
    viewportWidth: 1600,
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
        placeOrder() {
          const randomIndex = Math.floor(Math.random() * 2);
          const newRandomNumber = Math.ceil(Math.random(1000) * 1000);
          const cities = ['Kyiv', 'Lviv', 'Odessa'];
          const country = 'Ukraine';
          const card = '111111111111';
          const monthes = ['April', 'March', 'May'];
          const minYear = 1900;
          const maxYear = 2005;
          // eslint-disable-next-line max-len
          const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
          const successMessage = 'Thank you for your purchase!';
          return {
            name: faker.name.firstName() + newRandomNumber,
            city: cities[randomIndex],
            country,
            card,
            month: monthes[randomIndex],
            randomYear,
            successMessage
          };
        }
      });
    }
  }
});

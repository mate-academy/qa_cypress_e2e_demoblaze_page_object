const { defineConfig } = require('cypress');
// const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1280,
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      // on('task', {
      //   generateUser() {
      //     const randomNumber = Math.ceil(Math.random(1000) * 1000);
      //     return {
      //       username: faker.name.firstName() + `${randomNumber}`,
      //       email: 'test' + `${randomNumber}` + '@mail.com',
      //       password: 'Password12345!',
      //       country: faker.address.country(),
      //       city: faker.address.city(),
      //       card: faker.providers.credit_card.Provider(),
      //       month: faker.providers.date_time.Provider.month_name(),
      //       year: faker.providers.date_time.Provider.year()
      //     };
      //   }
      // });
    }
  }
});

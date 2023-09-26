const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://www.demoblaze.com/',
    viewportWidth: 1920,
    viewportHeight:1080,
    setupNodeEvents(on, config) {
      
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.name.firstName() + `${randomNumber}`,
            email: 'test' + `${randomNumber}` + '@mail.com',
            password: 'Password12345!'
          };
          // },
          // generateData () {
          //   return {
          //    name: faker.name.firstName(),
          //    country: faker.address.country(),
          //    city: faker.address.city(),
          //    creditCard: faker.random.alphaNumeric(16),
          //    month: faker.date.month(),
          //    year: faker.random.number({min: 2023, max: 2030}),
          //    successMessage: 'Thanks for your purchase!'
          //   }
      
          }
      
        })
      }
      }
    })
    
    
      

  
  
  
      
    
  


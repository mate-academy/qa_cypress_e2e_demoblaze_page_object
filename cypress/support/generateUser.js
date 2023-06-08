const faker = require('faker');

function generateUser() {
  const randomNumber = Math.ceil(Math.random(1000) * 1000);

  return {
    name: faker.name.firstName() + `${randomNumber}`,
    email: 'test' + `${randomNumber}` + '@mail.com',
    password: faker.internet.password(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: randomNumber,
    month: faker.date.month(),
    year: faker.date.between('2000-01-01', '2017-12-31').getFullYear()
  };
};

module.exports = { generateUser };

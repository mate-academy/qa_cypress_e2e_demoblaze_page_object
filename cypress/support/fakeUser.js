const { faker } = require('@faker-js/faker');

function generateFakeUser() {
  return {
    name: faker.name.firstName(),
    card: faker.finance.creditCardNumber(),
    city: faker.address.city(),
    country: faker.address.country(),
    month: faker.date.month(),
    year: faker.date.future().getFullYear()
  };
}

module.exports = { generateFakeUser };

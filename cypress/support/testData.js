const faker = require('faker');

function testData () {
  const category = 'Laptops';
  const product = 'Sony vaio i7';
  const alertMessage = 'Product added';
  const cart = 'Cart';
  const firstName = faker.name.firstName();
  const country = faker.address.country();
  const city = faker.address.city();
  const creditCart = faker.finance.creditCardNumber();
  const month = faker.date.month();
  const year = faker.datatype.number({ min: 1950, max: 2022 });

  return { category, product, alertMessage, cart, firstName, country, city, creditCart, month, year };
}

module.exports = { testData };

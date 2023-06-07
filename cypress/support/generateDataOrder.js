const faker = require('faker');

class GenerateDataForOrder {
  generateDataOrder() {
    return {
      firstName: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      creditCard: Math.floor(Math.random() * 1e16),
      month: faker.date.month(),
      year: faker.random.number({ min: 1960, max: 2023 })
    };
  }
}

export default GenerateDataForOrder;

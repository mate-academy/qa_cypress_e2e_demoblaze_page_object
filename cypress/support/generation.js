import { faker } from '@faker-js/faker';

function userGeneration() {
  const userGen = {
    name: faker.name.fullName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCardNumber: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.date.future().getFullYear()
  };

  return userGen;
}

const generated = userGeneration();

export default generated;

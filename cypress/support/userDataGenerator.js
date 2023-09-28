import faker from 'faker';

export function generateUserData() {
  return {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.random.number({ min: 2023, max: 2030 }).toString(),
  };
}

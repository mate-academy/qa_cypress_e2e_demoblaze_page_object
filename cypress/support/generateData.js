const { faker } = require('@faker-js/faker');

export const generateCheckoutData = () => {
  const name = faker.name.fullName();
  const country = faker.address.country();
  const city = faker.address.city();
  const creditCard = faker.finance.creditCardNumber();
  const month = faker.date.month();
  const year = faker.date.future().getFullYear();

  return {
    name,
    country,
    city,
    creditCard,
    month,
    year
  };
};

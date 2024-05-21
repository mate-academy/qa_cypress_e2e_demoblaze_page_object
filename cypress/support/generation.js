import { faker } from '@faker-js/faker';

function signUp() {
  const userGen = {
    username: faker.internet.userName().toLowerCase().split('.').join('') +
    faker.internet.userName().toLowerCase().split('.').join(''),
    password: faker.internet.password().toLowerCase()
  };

  return userGen;
}

const signUpGen = signUp();

export default signUpGen;

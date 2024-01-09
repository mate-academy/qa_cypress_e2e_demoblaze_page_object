import faker from 'faker';
import HomePageObject from '../support/HomePageObject';
import CartPageObject from '../support/CartPageObject';
/// <reference types='cypress' />

const home = new HomePageObject();
const cart = new CartPageObject();

const userData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  credit: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  success: 'Thank you for your purchase!'
};

describe('Buying the gadget', () => {
  before(() => {
    home.visit();
  });

  it('should add a gadget to the cart and checkout', () => {
    home.clickOnCategory('Laptops');
    home.clickOnProduct('Sony vaio i7');
    home.clickOnButton('Add to cart');
    home.assertAllert('Product added');
    home.clickOnLink('Cart');
    cart.assertProductInCart('Sony vaio i7');
    cart.clickOnButton('Place Order');
    cart.typeName(userData.name);
    cart.typeCountry(userData.country);
    cart.typeCity(userData.city);
    cart.typeCreditCard(userData.credit);
    cart.typeMonth(userData.month);
    cart.typeYear(userData.year);
    cart.clickOnButton('Purchase');
    cart.assertSuccessMessage(userData.success);
    cart.assertName(userData.name);
    cart.assertCreditCard(userData.credit);
    cart.clickOnButton('OK');
  });
});

import OrderFormPageObject from '../support/pages/orderForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />


const contactForm = new OrderFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const orderData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  creditCard: '1111-1111-1111-1111',
  month: faker.random.word(),
  year: 2024,
  successMessage: 'Thank you for your purchase!'
};

describe('User purchasing flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow user to buy a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnBtn('Add to cart');
    homePage.clickOnLink('Cart');
    homePage.assertAllert('Product added');
    homePage.clickOnBtn('Place Order');

    contactForm.nameField.type(orderData.name);
    contactForm.countryField.type(orderData.country);
    contactForm.cityField.type(orderData.city);
    contactForm.creditCardField.type(orderData.creditCard);
    contactForm.monthField.type(orderData.month);
    contactForm.yearField.type(orderData.year);
    homePage.clickOnBtn('Purchase');

    contactForm.confirmBtn.click();
  });
});
/// <reference types='cypress' />
import HomePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPagePageObject from '../support/pages/productPage.pageObject.js';
import CartPagePageObject from '../support/pages/cartPage.pageObject.js';
import { faker } from '@faker-js/faker';
import { randomNumberRange } from '../support/helpFunctions.js';

const homePage = new HomePageObject();
const productPage = new ProductPagePageObject();
const cartPage = new CartPagePageObject();
const testUser = {
  name: faker.person.firstName(),
  country: faker.location.county(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: `${randomNumberRange(1, 12)}`,
  year: `${randomNumberRange(1970, 2007)}`
};

describe('Checkout', {
  viewportHeight: 1100,
  viewportWidth: 1400,
  scrollBehavior: 'center'
},
() => {
  before(() => {
    homePage.visit();
  });

  it(`should provide an ability to buy product`, () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCard();
    productPage.assertAllert('Product added');
    homePage.navigateByClick('Cart');
    cartPage.checkProductsInfo(
      [
        {
          picture: 'https://www.demoblaze.com/imgs/sony_vaio_5.jpg',
          title: 'Sony vaio i7',
          price: '790'
        }
      ]
    );
    cartPage.clickPlaceOrderButton();
    cartPage.insertUserDataToOrderProduct(testUser);
    cartPage.purchaseByClick();
    cartPage.assertFinalMessage({
      name: testUser.name,
      creditCard: testUser.creditCard,
      total: `790`
    });
  });
});

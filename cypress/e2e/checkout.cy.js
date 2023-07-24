/// <reference types='cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const minYear = 1980;
const maxYear = 2008;
// eslint-disable-next-line max-len
const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
const user = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: randomYear,
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  message: 'Thank you for your purchase!'
};

describe('Demoblaze POM', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add product to the cart', () => {
    homePage.clickOnCategory(user.categoryName);
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCartBtn();
    productPage.allertMessage('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProduct(user.productName);
    cartPage.ClickPlaceOrder();
    cartPage.typeName(user.name);
    cartPage.typeCountry(user.country);
    cartPage.typeCity(user.city);
    cartPage.typeCreditCard(user.card);
    cartPage.typeMonth(user.month);
    cartPage.typeYear(user.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertSuccessAlert(user.message, user.card, user.name);
    cartPage.clickOnOkBtn();
  });
});

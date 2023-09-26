import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductDescriptionPageObject
  from '../support/pages/productDescription.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import ModalOrderFormPageObject
  from '../support/pages/modalOrderForm.pageObject';
import OrderFormPageObject from '../support/pages/orderForm.pageObject';
import faker from 'faker';
/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const productDescription = new ProductDescriptionPageObject();
const cart = new CartPageObject();
const orderForm = new OrderFormPageObject();
const modalOrder = new ModalOrderFormPageObject();

const testData = {
  productName: 'Sony vaio i7',
  allertMsg: 'Product added',
  category: 'Laptops',
  cartLink: 'Cart',
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.random.alphaNumeric(16),
  month: faker.date.month(),
  year: faker.random.number({ min: 2023, max: 2030 })
};

describe('Demoblaze order flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to make an order', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.productName);
    productDescription.clickOnAddToCartBtn();
    cy.wait(1000);
    productDescription.assertAllert(testData.allertMsg);

    productDescription.clickOnLink(testData.cartLink);
    cart.assertProductIsDisplayed(testData.productName);

    cart.clickOnPlaceOrderBtn();
    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCreditCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnPurchaseBtn();
    modalOrder.assertInfoIsDisplayed(testData.card, testData.name);

    modalOrder.clickOnOkBtn();
  });
});

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPage
  from '../support/pages/product.pageObject';
import UserCartPageObject
  from '../support/pages/userCart.pageObject';
import OrderForm
  from '../support/pages/orderForm.pageObject';
/// <reference types='cypress' />

const testData = {
  name: 'fName',
  country: 'Ukraine',
  city: 'Kiev',
  cCard: '555555555555',
  month: '09',
  year: '27'
};

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new UserCartPageObject();
const orderForm = new OrderForm();

describe('Demoblaze app', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow user to place orders', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    productPage.clickOnButton('Add to cart');

    homePage.clickOnLink('Cart');

    cartPage.clickOnButton('Place Order');

    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCreditCard(testData.cCard);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);

    orderForm.clickOnPurchaseBtn();

    orderForm.assertModalData(testData.cCard);
    orderForm.assertModalData(testData.name);

    orderForm.clickOnOkBtn();
  });
});

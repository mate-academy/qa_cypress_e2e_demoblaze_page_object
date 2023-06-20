/// <reference types="cypress" />
import PageObject from '../support/PageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cartPage.pageObject';
import GenerateDataForOrder from '../support/generateDataOrder';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const generateData = new GenerateDataForOrder();
const dataOrder = generateData.generateDataOrder();
const pageObject = new PageObject();

describe('DemoBlaze Catalogue', () => {
  before(() => {
    homePage.visit();
  });

  const data = {
    categoryName: 'Laptops',
    productName: 'Sony vaio i7'
  };

  it('should provide an ability to make a purchase', () => {
    homePage.clickOnCategory(data.categoryName);
    homePage.clickOnProduct(data.productName);
    productPage.clickOnAddToCartBtn();
    pageObject.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart(data.productName);
    cartPage.clickOnPlaceOrderBtn();
    cartPage.typeName(dataOrder.firstName);
    cartPage.typeCountry(dataOrder.country);
    cartPage.typeCity(dataOrder.city);
    cartPage.typeCreditCard(dataOrder.creditCard);
    cartPage.typeMonth(dataOrder.month);
    cartPage.typeYear(dataOrder.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertDataInModal(
      dataOrder.creditCard,
      dataOrder.firstName
    );
    cartPage.clickOnOkBtn();
  });
});

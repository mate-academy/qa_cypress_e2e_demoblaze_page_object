/// <reference types='cypress' />
import PageObject from "../support/PageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import CheckoutpageObject from "../support/pages/checkout.pageObject";
const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutpageObject();


describe('', () => {
  before(() => {
  });
  const category = 'Laptops';
  const product = 'Sony vaio i7';
  const assertAllert = 'Product added';
  const clickOnLink = 'Cart';
  const assertProductInCart = 'Sony vaio i7';
  const name = 'denys';
  const country = 'Usa';
  const city = 'Chicago';
  const card = '1234 1234 1234 1234';
  const month = 'May';
  const year = '2015'
  it('', () => {
    homePage.visit();
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clicOnAddtocart();
    homePage.assertAllert(assertAllert);
    homePage.clickOnLink(clickOnLink);
    checkout.waiter();
    checkout.assertProductInCart(assertProductInCart);
    checkout.clickOnPlaceOrderBtn();
    checkout.typeName(name);
    checkout.typeCountry(country);
    checkout.typeCity(city);
    checkout.typeCard(card);
    checkout.typeMonth(month);
    checkout.typeYear(year);
    checkout.clickOnPlaceOrderBtn2();
    checkout.assertEnteredDataIsShown(name, card);
    checkout.clickOnPlaceOrderBtn3();
  });
});

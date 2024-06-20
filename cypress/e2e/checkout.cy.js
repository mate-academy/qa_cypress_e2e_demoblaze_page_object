/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
const homePage = new HomeAndCataloguePageObject();

describe('', () => {
  let data;

  before(() => {
    cy.task('generateData').then(generateData => {
      data = generateData;
    });
    cy.viewport(1920, 1080);
  });

  it('should place order', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(data.productName);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.cartContainProduct(data.productName);
    homePage.clickOnButton('Place Order');
    homePage.fillNameField(data.randomName);
    homePage.fillCountryField(data.randomCountry);
    homePage.fillCityField(data.randomCity);
    homePage.fillCardField(data.randomCreditCard);
    homePage.fillMonthField(data.randomMonth);
    homePage.fillYearField(data.randomYear);
    homePage.clickOnButton('Purchase');
    homePage.ModalWindowContainText('Thank you for your purchase!');
    homePage.ModalWindowContainName(data.randomName);
    homePage.ModalWindowContainCard(data.randomCreditCard);
    homePage.clickOnButton('OK');
  });
});

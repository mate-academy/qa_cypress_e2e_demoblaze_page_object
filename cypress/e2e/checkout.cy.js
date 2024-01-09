import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

describe('DemoBlaze', () => {
  before(() => {
    cy.viewport(1000, 660);
  });

  it('able to complete the entire flow, () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertProductInCart('Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.wait(5000);
    homePage.fillOrderForm('Anna', 'Ukraine', 'Kyiv', '55667', 'january', '2024');
    homePage.clickOnButton3('Purchase');
    homePage.clickOnButton4('OK');
  });
});

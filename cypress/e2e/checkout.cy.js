/// <reference types='cypress' />
import HomeAndCataloguePageObject from
  '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const testData = {
  url: '/index.html',
  category: 'Laptops',
  product: 'Sony vaio i7',
  assertMsgAddtoCart: 'Product added',
  name: 'Tester001',
  country: 'India',
  city: 'Mumbai',
  creditCard: '123-456-789-123',
  month: 'April',
  year: '2025'
};
describe('Home Page', () => {
  before(() => {
    homePage.visit(testData.url);
  });

  it('should add a laptop to cart and proceed with purchase', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnButton('Add to cart');
    homePage.assertAlert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('#tbodyid td').should('contain.text', testData.product);
    homePage.clickOnButton('Place Order');
    homePage.typeInputField('name', testData.name);
    homePage.typeInputField('country', testData.country);
    homePage.typeInputField('city', testData.city);
    homePage.typeInputField('card', testData.creditCard);
    homePage.typeInputField('month', testData.month);
    homePage.typeInputField('year', testData.year);
    homePage.clickOnButton('Purchase');
    cy.get('div.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('p.lead.text-muted').should('contain.text', testData.name);
    cy.get('p.lead.text-muted').should('contain.text', testData.creditCard);
    homePage.clickOnButton('OK');
  });
});

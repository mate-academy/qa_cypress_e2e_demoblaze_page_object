/// <reference types='cypress' />
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

describe('Demoblaze Flow', () => {
  before(() => {
   homePage.visit();
  });

  it('should add a product to the cart and place the order', () => {
   homePage.clickOnCategory('Laptops');
   homePage.clickOnProduct('Sony vaio i7');
   homePage.addToCart(); 
   homePage.clickOnCart();
   homePage.clickOnLink('Cart');
   cy.contains('.success', 'Sony vaio i7').should('be.visible');
   cy.contains('.btn', 'Place Order').click();
   
   contactForm.fillOrderForm(
      'Vasyl',
      'Ukraine',
      'Kyiv',
      '2222 2222 2222 2222',
      '12', '1998'
    );
   cy.contains('.btn', 'Purchase').click();

   cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
   cy.contains('.confirm', 'OK').click();
  });
});

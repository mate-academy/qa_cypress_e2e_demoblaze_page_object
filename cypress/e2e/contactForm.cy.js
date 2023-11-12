import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />
const randomNumber = Math.floor(Math.random() * 100000);
const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();

describe('Contact', () => {
  it('should provide the ability to send feedback', () => {
    homePage.visit();
    homePage.clickOnLink('Contact');

    const testData = {
      randomNumber: Math.floor(Math.random() * 100000),
      email: faker.internet.email(),
      name: faker.name.firstName() + randomNumber.toString(),
      message: faker.random.words(),
      password: faker.internet.password(),
      successMessage: 'Thanks for the message!!'
    };
    class HomeAndCataloguePageObject {
      visit() {
        cy.visit('https://www.demoblaze.com');
      }
    
      clickOnLink(linkText) {
        cy.contains(linkText).click();
      }
    }
    class ContactFormPageObject {
      typeEmail(email) {
        cy.get('#emailInput').type(email);
      }
    
      typeName(name) {
        cy.get('#nameInput').type(name);
      }
    
      typeMessage(message) {
        cy.get('#messageInput').type(message);
      }
    
      clickOnSendMessageBtn() {
        cy.get('#sendMessageBtn').click();
      }
    
      assertAllert(successMessage) {
        cy.get('.alert-success').should('contain', successMessage);
      }
    }
            
    contactForm.typeEmail(testData.email);
    contactForm.typeName(testData.name);
    contactForm.typeMessage(testData.message);
    contactForm.clickOnSendMessageBtn();
    contactForm.assertAllert(testData.successMessage);
  });
});

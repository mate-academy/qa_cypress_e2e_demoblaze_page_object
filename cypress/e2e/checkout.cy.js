/// <reference types='cypress' />
import faker from 'faker';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';

const randomNumber = Math.floor(Math.random() * 100000);
const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

describe('Demoblaze', () => {
  before(() => {
  });

  it('should provide the ability to register', () => {
    homePage.visit();
    homePage.clickOnLink('Contact');
  
    const randomNumber = Math.floor(Math.random() * 100000);
    const email= faker.internet.email();
    const message= faker.random.words();
    const name = faker.name.firstName() + randomNumber.toString();
    const password = faker.internet.password();
    cy.get('#recipient-email').click().type(email);
    cy.get('#recipient-name').click().type(name);
    cy.get('#message-text').click().type(message);
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#signin2').click();

    cy.get('#sign-username').click().type(name);
    cy.get('#sign-password').click().type(password);

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.get('[onclick="byCat(\'notebook\')"]').should('exist').click().wait(3000);

    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();

    cy.get('.col-sm-12 > .btn').click();

    cy.get('#cartur').click();

    cy.get('.col-lg-1 > .btn').click();

    cy.get('#name').click().type(name);
    cy.get('#country').click().type('Ukraine');
    cy.get('#city').click().type('Lviv');
    cy.get('#card').click().type('12345678910');
    cy.get('#month').click().type('November');
    cy.get('#year').click().type('2023');

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.get('.confirm').should('exist').click();
  });

  describe('Contact', () => {
    it('should provide the ability to send feedback', () => {
      homePage.visit();
      homePage.clickOnLink('Contact');

      const testData = {
        email: faker.internet.email(),
        name: faker.name.firstName() + randomNumber.toString(),
        message: faker.random.words(),
        successMessage: 'Thanks for the message!!'
      };
      contactForm.typeEmail(testData.email);
      contactForm.typeName(testData.name);
      contactForm.typeMessage(testData.message);
      contactForm.clickOnSendMessageBtn();
    });
  });
});

import ContactFormPage from '../support/pages/contactForm';
import HomePage from '../support/pages/home';
import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

const contactForm = new ContactFormPage();
const homePage = new HomePage();

const testData = {
  email: faker.internet.email(),
  name: faker.person.firstName(),
  message: faker.lorem.words(),
  successMessage: 'Thanks for the message!!'
};

describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to send feedback', () => {
    homePage.clickOnLink('Contact');

    // ensure the modal is open and visible before interacting
    cy.get('#exampleModal')
      .should('have.class', 'show')
      .and('be.visible');

    contactForm.typeEmail(testData.email);
    contactForm.typeName(testData.name);
    contactForm.typeMessage(testData.message);
    contactForm.clickOnSendMessageBtn();

    contactForm.assertAlert(testData.successMessage);
  });
});

import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomePageObject from '../support/pages/homeСatalogue.pageObject';
const { faker } = require('@faker-js/faker');
/// <reference types='cypress' />

const contactForm = new ContactFormPageObject();
const homePage = new HomePageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.name.firstName(),
  message: faker.random.words(),
  successMessage: 'Thanks for the message!!'
};

describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to send feedback', () => {
    homePage.clickOnLink('Contact');
    contactForm.typeEmail(testData.email);
    contactForm.typeName(testData.name);
    contactForm.typeMessage(testData.message);
    contactForm.clickOnSendMessageBtn();

    contactForm.allert(testData.successMessage);
  });
});

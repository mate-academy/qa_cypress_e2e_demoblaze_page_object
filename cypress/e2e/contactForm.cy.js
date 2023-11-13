import ContactFormPageObject
  from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();

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

    contactForm.assertAllert(testData.successMessage);
  });
});

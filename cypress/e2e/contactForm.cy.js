import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();

describe('Contact', () => {
  it('should provide the ability to send feedback', () => {
    homePage.visit();
    homePage.clickOnLink('Contact');
    
    const testData = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      message: faker.random.words(),
      successMessage: 'Thanks for the message!!'
    };

    contactForm.typeEmail(testData.email);
    contactForm.typeName(testData.name);
    contactForm.typeMessage(testData.message);
    contactForm.clickOnSendMessageBtn();

    contactForm.assertAllert(testData.successMessage);
  });
});

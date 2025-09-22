import ContactFormPage from '../support/pages/contactForm.pageObject';

describe('Demoblaze contact form', () => {
  const contactFormPage = new ContactFormPage();

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com');
  });

  it('should send a message via contact form', () => {
    contactFormPage
      .openContactForm()
      .fillForm('test@test.com', 'Tester', 'Hello, this is a test message!')
      .submitForm();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Thanks for the message!!');
    });
  });
});

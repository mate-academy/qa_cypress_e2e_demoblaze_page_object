/// <reference types="cypress" />

// Переміщений клас Page Object
class HomePage {
  clickLaptopsCategory() {
    cy.contains('Laptops').click();
  }

  clickSonyVaioI7() {
    cy.contains('Sony vaio i7').click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
  }

  goToCart() {
    cy.contains('Cart').click();
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }

  verifyOrderFormVisible() {
    cy.get('#orderModal').should('be.visible');
  }

  fillOrderForm({ name, country, city, creditCard, month, year }) {
    cy.get('#name').clear();
    cy.get('#name').type(name);

    cy.get('#country').clear();
    cy.get('#country').type(country);

    cy.get('#city').clear();
    cy.get('#city').type(city);

    cy.get('#card').clear();
    cy.get('#card').type(creditCard);

    cy.get('#month').clear();
    cy.get('#month').type(month);

    cy.get('#year').clear();
    cy.get('#year').type(year);
  }

  submitOrder() {
    cy.contains('Purchase').click();
  }

  verifyThankYouMessage() {
    cy.get('.sweet-alert', { timeout: 10000 }).should('be.visible');
    cy.contains('Thank you for your purchase!').should('be.visible');
  }

  clickOkInConfirmation() {
    cy.get('.confirm.btn.btn-lg.btn-primary', { timeout: 30000 }) // чекаємо до 30 сек
      .should('be.visible')
      .and('contain.text', 'OK')
      .click();
  }
}

// Тест
describe('Demoblaze Checkout Flow', () => {
  const homePage = new HomePage();

  it('Completes full checkout flow', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('PRODUCT STORE').should('be.visible');

    homePage.clickLaptopsCategory();
    cy.contains('Sony vaio i5').should('be.visible');

    homePage.clickSonyVaioI7();
    cy.get('.name').should('contain.text', 'Sony vaio i7');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Product added');
    });
    homePage.addToCart();

    cy.visit('https://www.demoblaze.com/cart.html');
    cy.wait(3000);
    cy.contains('td', 'Sony vaio i7', { timeout: 15000 }).should('be.visible');

    homePage.clickPlaceOrder();
    homePage.verifyOrderFormVisible();

    homePage.fillOrderForm({
      name: 'Юрій К.',
      country: 'Україна',
      city: 'Київ',
      creditCard: '4242 4242 4242 4242',
      month: '06',
      year: '2025'
    });

    homePage.submitOrder();
    homePage.verifyThankYouMessage();
    homePage.clickOkInConfirmation();
  });
});

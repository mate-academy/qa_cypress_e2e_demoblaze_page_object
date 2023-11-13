import PageObject from '../PageObject';

class checkoutPageObject extends PageObject {
  url = '/index.html';

  clickOnCategory(category) {
    cy.get(`[onclick="byCat('${category}')"]`)
      .click();
  };

  clickButton(button) {
    cy.get(`[onclick="${button}"]`)
      .click();
  };

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  };

  assertAddingProductToCart(text) {
    cy.on('window:confirm', () => {
      expect(text).to.equal('Product added.');
    });
  };

  clickPlaceOrderButton() {
    cy.get('[data-target="#orderModal"]')
      .click();
  };

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name')
      .type(name);
    cy.get('#country')
      .type(country);
    cy.get('#city')
      .type(city);
    cy.get('#card')
      .type(card);
    cy.get('#month')
      .type(month);
    cy.get('#year')
      .type(year);
  };

  assertTotal(sum) {
    cy.get('#totalm')
      .should('contain', sum);
  };

  clickPurchaseButton() {
    cy.contains('Purchase')
      .click();
  }
}

export default checkoutPageObject;

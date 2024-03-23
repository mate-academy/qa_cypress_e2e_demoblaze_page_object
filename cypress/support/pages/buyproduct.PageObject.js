import PageObject from '../PageObject';

export class BuyProductPageObject extends PageObject {
  url = '/';
  get choosingCategory() {
    return cy.get('[onclick="byCat(\'notebook\')"]').click();
  }

  chooseItem(item) {
    return cy.contains('[href="prod.html?idp_=9"]', item).click();
  }

  get addToCart() {
    return cy.contains('[onclick="addToCart(9)"]', 'Add to cart').click();
  }

  assertAllertMessage(message) {
    return cy.on('window:alert', (string) => {
      expect(string).to.equal(message);
    });
  }

  get goToCart() {
    return cy.get('#cartur').click();
  }

  get wait2SecForItemAppearInCart() {
    return cy.wait(2000);
  }

  aseertItemIsAdded(item) {
    return cy.get('.success', { timeout: 10000 }).should('contain', item);
  }

  get clickBtnPlaseOrder() {
    return cy.contains('.btn.btn-success', 'Place Order').click();
  }

  get selectNameField() {
    return cy.get('#name');
  }

  get selectCountryField() {
    return cy.get('#country');
  }

  get selectCityField() {
    return cy.get('#city');
  }

  get selectCardField() {
    return cy.get('#card');
  }

  get selectMonthField() {
    return cy.get('#month');
  }

  get selectYearField() {
    return cy.get('#year');
  }

  get clickPurchaseBtn() {
    return cy.contains('.btn.btn-primary', 'Purchase').click();
  }

  assertModalWinHasCardNumber(card) {
    return cy.get('.lead.text-muted').should('contain.text', card);
  }

  assertModalWinHasCustomerName(name) {
    return cy.get('.lead.text-muted').should('contain.text', name);
  }

  get clickOkBtn() {
    return cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}

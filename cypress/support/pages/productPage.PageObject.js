import PageObject from '../PageObject';

export class ProductPageObject extends PageObject {
  url = '/';
  choosingCategory(category) {
    return cy.contains('#itemc', category).click();
  }

  chooseItem(item) {
    return cy
      .get('.hrefch')
      .contains('[href="prod.html?idp_=9"]', item)
      .click();
  }

  get addToCart() {
    return cy.contains('.btn.btn-success.btn-lg', 'Add to cart').click();
  }

  assertAllertMessage(message) {
    return cy.on('window:alert', (string) => {
      expect(string).to.equal(message);
    });
  }

  get goToCart() {
    return cy.get('#cartur').click();
  }

  get wait2SecForItemAppear() {
    return cy.wait(2000);
  }
}

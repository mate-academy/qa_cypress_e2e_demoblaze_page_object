import PageObject from '../PageObject';

export class ProductPageObject extends PageObject {
  url = '/';

  choosingCategory(category) {
    return cy.contains('#itemc', category).click();
  }

  chooseItem(item) {
    return cy.contains('.hrefch', item).click();
  }

  addToCart() {
    return cy.contains('.btn.btn-success.btn-lg', 'Add to cart').click();
  }

  assertAlertMessage(message) {
    return cy.on('window:alert', (string) => {
      expect(string).to.equal(message);
    });
  }

  goToCart() {
    return cy.get('#cartur').click();
  }
}

export default ProductPageObject;

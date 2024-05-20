import PageObject from "../PageObject";

class HomePageObject extends PageObject {
  url = 'index.html';

  getCategoryName(category) {
    return cy.contains('#itemc', category);
  }

  getProductName(productName) {
    return cy.contains('a', productName);
  }

  getAddToCardBtn(addToCardBtn) {
    return cy.contains('.btn', addToCardBtn);
  }

  get CartBtn() {
    return cy.get('#cartur');
  }
}

export default HomePageObject;

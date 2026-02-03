export default class HomeCataloguePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  get laptopsCategory() {
    return cy.contains('a', 'Laptops');
  }

  clickOnLaptopsCategory() {
    this.laptopsCategory.click();
  }

  clickOnProduct(productName) {
    cy.contains('a', productName).click();
  }
}

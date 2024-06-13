import PageObject from "../PageObject";

export class ProductPage extends PageObject {
    url = '/index.html';

    get addToCartBtn() {
      return cy.get('.btn.btn-success.btn-lg')
    }
    
    clickOnAddToCartBtn() {
      this.addToCartBtn.click();
    } 
}
import { orderData } from '../constants/userInfo';
import PageObject from '../PageObject';

class HomeCatalogPageObject extends PageObject {
  url = '/index.html';

  clickOnTheCategory(linkName) {
    cy.contains('a.list-group-item', linkName).click();
  }

  clickOnDeterminedLink(productName) {
    cy.contains('a', productName).click();
  }

  checkAlertWindow() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
      cy.contains('button', 'OK').click();
    });
  }

  assertCart(product) {
    cy.contains('td', product).should('exist');
  }

  inputFill(tag, value) {
    cy.get(`${tag}`).type(value);
  }

  sendTheOrder(user) {
    this.inputFill('#name', user);
    this.inputFill('#country', orderData.country);
    this.inputFill('#city', orderData.city);
    this.inputFill('#card', orderData.creditCard);
    this.inputFill('#month', orderData.month);
    this.inputFill('#year', orderData.year);

    cy.contains('button', 'Purchase').click();
    cy.contains('h2', 'Thank you for your purchase!').should('exist');
    cy.contains('button', 'OK').click();
  }
}

export default HomeCatalogPageObject;

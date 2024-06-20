import PageObject from '../PageObject';
import PlaceOrderPageObject from './placeOrder.pageObject';
import { faker } from '@faker-js/faker';

const name = faker.person.fullName();
const cardNumber = faker.finance.creditCardNumber();

const purchaseModal = new PlaceOrderPageObject(name, cardNumber);

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  clickOnAddToCart() {
    cy.contains('.btn-success', 'Add to cart').click();
  }

  checkIsProductInCart(product) {
    cy.contains('td', product).should('exist');
  }

  clickMakeOrder() {
    cy.contains('.btn-success', 'Place Order').click();
  }

  makePurchase() {
    purchaseModal.fillFormAndPurchase();
  }

  checkConfirmationModalAndClose() {
    cy.contains('.sweet-alert h2', 'Thank you for your purchase!').should(
      'exist'
    );
    cy.contains('.sweet-alert', name).should('exist');
    cy.contains('.sweet-alert', cardNumber).should('exist');
    cy.contains('.confirm', 'OK').click();
  }
}

export default HomeAndCataloguePageObject;

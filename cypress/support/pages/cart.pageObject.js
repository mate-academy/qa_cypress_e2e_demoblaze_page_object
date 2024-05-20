import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  typeName(userName) {
    cy.get('#name').type(userName);
  }

  typeCountry(userCountry) {
    cy.get('#country').type(userCountry);
  }

  typeCity(userCity) {
    cy.get('#city').type(userCity);
  }

  typeCard(userCard) {
    cy.get('#card').type(userCard);
  }

  typeMounth(cardMounth) {
    cy.get('#month').type(cardMounth);
  }

  typeYear(cardYear) {
    cy.get('#year').type(cardYear);
  }

  clickOnPurchase() {
    cy.contains('[onclick="purchaseOrder()"]', 'Purchase').click();
  }

  assertUserName(userName) {
    cy.get('.lead ').should('contain', userName);
  }

  assertCardNumber(userCard) {
    cy.get('.lead ').should('contain', userCard);
  }

  assertProductInCart(productName) {
    cy.get('.success').should('contain', productName);
  }

  clickOnPlasceOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  clickOnOkBtn() {
    cy.contains('.confirm', 'OK')
      .click();
  }
}

export default CartPageObject;

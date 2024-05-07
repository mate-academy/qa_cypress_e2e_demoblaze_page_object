import PageObject from '../PageObject';

class MainPageObject extends PageObject {
  url = '/index.html';

  clickOnLaptop() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  clickOnVaioI7() {
    cy.get('.hrefch').contains('Sony vaio i7').click();
  }

  clickOnAddToCart() {
    cy.get('.btn').contains('Add to cart').click();
  }

  clickOnCart() {
    cy.get('#cartur').click();
  }

  get SonyVaioAssert() {
    return cy.contains('.col-lg-8', 'Sony vaio i7');
  }

  callAssert() {
    this.SonyVaioAssert.should('contain', 'Sony vaio i7');
  }

  clickOnPlaceOrder() {
    cy.get('.btn').contains('Place Order').click();
  }

  fillPlaceOrder(Name, Country, City, Card, Month, Year) {
    cy.get('#name').type(Name);
    cy.get('#country').type(Country);
    cy.get('#city').type(City);
    cy.get('#card').type(Card);
    cy.get('#month').type(Month);
    cy.get('#year').type(Year);
    cy.get('.btn').contains('Purchase').click();
  }

  assertDataOnModal(Card, Name) {
    cy.get('.lead').should('contain', Card);
    cy.get('.lead').should('contain', Name);
  }

  clickOnOk() {
    cy.get('.confirm').click();
  }
}
export default MainPageObject;

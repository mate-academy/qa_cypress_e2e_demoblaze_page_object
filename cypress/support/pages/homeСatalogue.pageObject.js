import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickaddToCartButton() {
    cy.get('.col-sm-12 > .btn')
      .click();
  }

  openCart() {
    cy.get('#cartur')
      .click();
  }

  clickPlaceOrderButton(Item) {
    cy.contains('.col-lg-1 > .btn', Item)
      .click();
  }

  clickPurchaseButton(zItem) {
    // eslint-disable-next-line max-len
    cy.contains('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', zItem)
      .click();
  }

  clickOkButton(yItem) {
    // eslint-disable-next-line max-len
    cy.contains('.confirm', yItem)
      .click();
  }

  typeName(userName) {
    cy.get('#name')
      .type(userName);
  }

  typeCountry(country) {
    cy.get('#country')
      .type(country);
  }

  typeCity(city) {
    cy.get('#city')
      .type(city);
  }

  typeCard(card) {
    cy.get('#card')
      .type(card);
  }

  typeMonth(month) {
    cy.get('#month')
      .type(month);
  }

  typeYear(year) {
    cy.get('#year')
      .type(year);
  }

  alertProduct(alert) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(`Product added`);
    });
  }

  addedProduct(product) {
    cy.get('.success > :nth-child(2)')
      .should('contain', product);
  }

  thankAlert(thanks) {
    cy.get('.sweet-alert > h2')
      .should('contain', 'Thank you for your purchase!');
  }
}
export default HomeAndCataloguePageObject;

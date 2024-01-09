import PageObject from '../PageObject';
class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';
  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnButton1(buttonName) {
    cy.contains('.col-sm-12', buttonName)
      .click();
  }

  clickOnButton2(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  clickOnButton3(buttonName) {
    cy.contains('.btn-primary', buttonName)
      .click();
  }

   clickOnButton4(buttonName) {
    cy.contains('.btn', buttonName)
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
  assertProductInCart(productName) {
    cy.get('td').should('contain', productName);
  }
  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }
}
export default HomeAndCataloguePageObject;    

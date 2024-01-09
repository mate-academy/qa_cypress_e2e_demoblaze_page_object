import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(Laptops) {
    cy.contains('[onclick^="byCat"]', 'Laptops')
      .click();
  }

  clickOnCategory(Sony) {
    cy.contains('a', 'Sony vaio i7')
      .click();
  }

  clickOnProduct(Product) {
    cy.contains('[onclick="addToCart(9)"]', 'Add to cart')
      .click();
  }


  clickOnCart(Cart) {
    cy.contains('[href="cart.html"]', 'Cart')
      .click();
  }

  checkContainProduct(Check) {
    cy.get('td').should('contain.text', 'Sony vaio i7');
      
  }
}

export default HomeAndCataloguePageObject;

import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  get clickOnLink() {
    return cy.contains('[onclick^="byCat"]', 'Laptops');
      
  }

  get clickOnCategory() {
    return cy.contains('a', 'Sony vaio i7');
      
  }

  get clickOnProduct() {
    return cy.contains('[onclick="addToCart(9)"]', 'Add to cart');
      
  }


  get clickOnCart() {
    return cy.contains('[href="cart.html"]', 'Cart');
      
  }

  get checkContainProduct() {
    return cy.get('td').should('contain.text', 'Sony vaio i7');
      
  }
}

export default HomeAndCataloguePageObject;

import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';
  
  clickOnLink(linkName){
    cy.contains('[onclick^="byCat"]', linkName).click();

  }

  clickOnCategory(categoryName){
    cy.contains('a', categoryName).click();
  }

  clickOnProduct(productName){
    cy.contains('.col-sm-12 > .btn', productName).click();     
  }


  clickOnCart(cart){
    cy.get('#cartur').click();
  }

  checkContainProduct(productName){
    cy.get('td').should('contain.text', productName);;
      
  }

}

export default HomeAndCataloguePageObject;

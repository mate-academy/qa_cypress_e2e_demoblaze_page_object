import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  assertAlert(assertText) {
    cy.on('window:alert',(t)=>{
      expect(t).to.contains(assertText);
   })
  }

}

export default ProductPageObject;
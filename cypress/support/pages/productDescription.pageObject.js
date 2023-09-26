import HomeAndCataloguePageObject
  from './homeСatalogue.pageObject';
/// <reference types='cypress' />

class ProductDescriptionPageObject extends HomeAndCataloguePageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }
}

export default ProductDescriptionPageObject;

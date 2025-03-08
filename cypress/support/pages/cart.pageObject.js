import HomeAndCataloguePageObject
  from './homeСatalogue.pageObject';

class CartPageObject extends HomeAndCataloguePageObject {
  typeInField(fieldId, text) {
    cy.get(fieldId).type(text);
  }
}

export default CartPageObject;

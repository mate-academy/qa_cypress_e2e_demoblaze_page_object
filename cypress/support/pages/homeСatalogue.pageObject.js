import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/';

  get laptopsBtn() {
    return cy.contains('.list-group-item', 'Laptops');
  }

  get sonyVaioi7Link() {
    return cy.contains('.card-title', 'Sony vaio i7');
  }
  
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  get cartBtn() {
    return cy.contains('#cartur', 'Cart');
  }

  get productInCart() {
    return cy.contains('.success', 'Sony vaio i7');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnLaptopsBtn() {
    this.laptopsBtn.click();
  }

  clickOnProduct() {
    this.sonyVaioi7Link.click();
  }

  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }

  clickOnCartBtn() {
    this.cartBtn.click();
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }


}

export default HomeAndCataloguePageObject;

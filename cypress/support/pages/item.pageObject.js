import PageObject from '../PageObject';

class ItemPageObject extends PageObject {
  get laptopsBtn() {
    return cy.get('[onclick="byCat(\'notebook\')"]');
  }

  clickOnLaptopsBtn() {
    this.laptopsBtn.click();
  }

  get sonyVioI7Btn() {
    return cy.get('[href="prod.html?idp_=9"]');
  }

  clickOnSonyVioI7Btn() {
    this.sonyVioI7Btn.eq(1).click();
  }

  get addToCartBtn() {
    return cy.get('[onclick="addToCart(9)"]');
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }

  get cartBtn() {
    return cy.get('#cartur');
  }

  clickOnCartBtn() {
    this.cartBtn.click();
  }
}
export default ItemPageObject;

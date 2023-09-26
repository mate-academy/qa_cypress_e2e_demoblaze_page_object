import PageObject from "../PageObject";

class HomePagePageObject extends PageObject {
  url = '/';

  get laptopCategory() {
    return cy.contains('#itemc', 'Laptops');
  }

  get sonyVeioI7Laptop() {
    return cy.contains('.hrefch', 'Sony vaio i7')
  }

  get addToCartButton () {
    return cy.get('.btn-success')
  }

  clickOnLaptopCategory() {
    this.laptopCategory.click();
  }

  clickOnSonyVeioI7Laptop() {
    this.sonyVeioI7Laptop.click();
  }

  checkForContainName() {
    cy.get('.name').should('contain', 'Sony vaio i7')
  }

  clickOnAddToCartBtn() {
    this.addToCartButton.click();
  }
}

export default HomePagePageObject
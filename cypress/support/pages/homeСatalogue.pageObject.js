import PageObject from "../PageObject";

class HomeAndCataloguePageObject extends PageObject {
  url = "/index.html";

  get laptopsBtn() {
    return cy.get("#itemc");
  }
  clickLaptopsBtn() {
    this.laptopsBtn.click();
  }

  get laptopNameBtn() {
    return cy.contains(".hrefch", "Sony vaio i7");
  }
  clickLaptopNameBtn() {
    this.laptopNameBtn.click();
  }

  get addToCartBtn() {
    return cy.contains(".btn ", "Add to cart");
  }
  clickAddToCartBtn() {
    this.addToCartBtn.click();
  }

  get successfulWindow() {
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(alertMessage.confirmAction);
    });
  }

  get windowOkBtn() {
    return cy.get('button', 'Ok')
  }
  clickWindowOkBtn() {
    this.windowOkBtn.click();
  }

  get cartBtn() {
    return cy.get("#cartur");
  }
  clickCartBtn() {
    this.cartBtn.click();
  }

  get cartPageUrl() {
    return cy.url();
  }
  assertCartPageUrl() {
    this.cartPageUrl.should('include', 'cart.html');
  }
}

export default HomeAndCataloguePageObject;

import PageObject from '../PageObject';


class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  get laptopBtn() {
    return cy.get("#itemc");
  }
  clickLaptopBtn() {
    this.laptopBtn.click();
  }
  get laptopNameBtn() {
    return cy.contains(".hrefch", "Sony vanio i7");
  }
  clickLaptopNameBtn() {
    this.laptopNameBtn.click();
  }
  get addToCartBtn() {
    return cy.contains(".btn", "Add to cart");
  }
  clickAddToCartBtn() {
    this.addToCartBtn.click();
  }
  get successfulWindow() {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Product added.");
    });
  }
  
  get window_ok_btn() {
    return cy.get("button", "OK");
  }
  click_window_ok_btn() {
    this.window_ok_btn.click();
  }

  get cartBtn() {
    return cy.get("#cartur");
  }
  clickcartBtn() {
    this.cartBtn.click();
  }

  get cartPageUrl() {
    return cy.url();
  }
  assertCartPage() {
    this.cartPageUrl.should("include", 'cart.html');
  }
}

export default HomeAndCataloguePageObject;

import PageObject from "../PageObject";

class HeaderContainerPageObject extends PageObject {

  get cartBtn() {
    return cy.get('#cartur')
  }

  clickOnCartBtn() {
    this.cartBtn.click();
  }

}

export default HeaderContainerPageObject
import PageObject from "../PageObject";

class CheckoutPageObject extends PageObject {
  url = "/index.html";

  clickOnButton(linkName) {
    cy.get(".btn-success", linkName).click();
  }
}
export default CheckoutPageObject;

class CheckoutFormPageObject {
  url = 'https://www.demoblaze.com/cart.html';

  get nameField() {
    return cy.get('[id="name"]');
  }

  get countryField() {
    return cy.get('[id="country"]');
  }

  get cityField() {
    return cy.get('[id="city"]');
  }

  get cardField() {
    return cy.get('[id="card"]');
  }

  get cardMonth() {
    return cy.get('[id="month"]');
  }

  get cardYearField() {
    return cy.get('[id="year"]');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get AlertCard() {
    return cy.get('.lead.text-muted');
  }

  get AlertName() {
    return cy.get('.lead.text-muted');
  }

  assertData(card, name) {
    this.AlertCard.should('contain', card);
    this.AlertName.should('contain', name);
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCityName(cityname) {
    this.cityField.type(cityname);
  }

  typeCountryName(countryname) {
    this.countryField.type(countryname, { force: true });
  }

  typeCreditCardNumber(cardnumber) {
    this.cardField.type(cardnumber);
  }

  typeMonthCard(cardmonth) {
    this.cardMonth.type(cardmonth);
  }

  typeYearCard(cardyear) {
    this.cardYearField.type(cardyear);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  // acceptAllert() {
  //   this.accesAllert
  // }
};

export default CheckoutFormPageObject;

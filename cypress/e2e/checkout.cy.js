/// <reference types='cypress' />
import MainPageObject from '../support/pages/Main.pageObject';

const Main = new MainPageObject();

describe('Main page', () => {
  before(() => {
    cy.visit('');
  });

  it('should allow user to buy a laptop', () => {
    const Name = 'Username';
    const Country = 'Poland';
    const City = 'Warsaw';
    const Card = '123';
    const Month = 'October';
    const Year = '2025';
    Main.clickOnLaptop();
    Main.clickOnVaioI7();
    Main.clickOnAddToCart();
    Main.clickOnCart();
    Main.callAssert();
    Main.clickOnPlaceOrder();
    Main.fillPlaceOrder(Name, Country, City, Card, Month, Year);
    Main.assertDataOnModal(Card, Name);
    Main.clickOnOk();
  });
});

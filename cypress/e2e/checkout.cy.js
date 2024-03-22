/// <reference types='cypress' />
import CartPage from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const cartPage = new CartPage();
const homePage = new HomeAndCataloguePageObject();

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  const randomMonthNumber = faker.datatype.number({
    min: 1,
    max: 12
  });
  const user = {
    firstName: faker.name.firstName(),
    country: faker.random.word(),
    city: faker.random.word(),
    card: faker.datatype.number({
      min: 1111111111111111,
      max: 9999999999999999
    }),
    month: randomMonthNumber < 10
      ? '0' + randomMonthNumber
      : randomMonthNumber,
    year: faker.datatype.number({
      min: 2025,
      max: 2030
    })
  };

  it('should provide the ability to order a product', () => {
    const currentDate = homePage.currentDate;
    const confirmText = 'Thank you for your purchase!';
    const amount = '790 USD';
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.addToCartButton.click();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertAddedProduct('Sony vaio i7');

    cartPage.placeOrderButton.click();
    cartPage.nameField.type(user.firstName);
    cartPage.countryField.type(user.country);
    cartPage.cityField.type(user.city);
    cartPage.cardField.type(user.card);
    cartPage.monthField.type(user.month);
    cartPage.yearField.type(user.year);
    cartPage.purchaseButton.click();

    cartPage.assertConfirmText(confirmText);
    cartPage.assertAmount(amount);
    cartPage.assertCard(user.card);
    cartPage.assertName(user.firstName);
    cartPage.assertDate(currentDate);

    cartPage.okConfirmButton.click();
  });
});

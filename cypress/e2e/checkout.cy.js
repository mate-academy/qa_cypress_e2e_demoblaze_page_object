/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const alertMessage = 'Product added';

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to add item to a cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnAddToCart();

    homePage.assertAllert(alertMessage);

    homePage.clickOnLink('Cart');

    homePage.assertProductInCart('Sony vaio i7');

    homePage.clickOnButton();

    homePage.typeName('Mariia');
    homePage.typeCountry('Ukraine');
    homePage.typeCity('Kyiv');
    homePage.typeCard('1234567890');
    homePage.typeMonth('April');
    homePage.typeYear('2025');

    homePage.clickOnPurchaseButton();

    homePage.assertDataInModal('Mariia', '1234567890');

    homePage.clickOnConfirmButton();
  });
});

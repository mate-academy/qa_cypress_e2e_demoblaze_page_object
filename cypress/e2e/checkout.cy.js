/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

describe('Purchase flow', () => {
  const page = new HomeAndCataloguePageObject();

  before(() => {
    page.visit();
  });

  it('Should provide a possibility to buy a product', () => {
    page.clickOnCategory('Laptops');
    page.clickOnProduct('Sony vaio i7');
    page.clickOnAddToCart();
    page.assertAllert('Product added');
    page.clickOnLink('Cart');
    page.checkIsProductInCart('Sony vaio i7');
    page.clickMakeOrder();
    page.makePurchase();
    page.checkConfirmationModalAndClose();
  });
});

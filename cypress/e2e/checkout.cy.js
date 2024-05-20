import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPage
  from '../support/pages/productPage.pageObject';
import CartPage
  from '../support/pages/cartPage.pageObject';
import PlaceOrderForm
  from '../support/pages/placeOrderForm.pageObject';
import generated
  from '../support/generation';
/// <reference types='cypress' />

const product = 'Sony vaio i7';

const homePageObject = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartObject = new CartPage();
const placeOrderForm = new PlaceOrderForm();

describe('', () => {
  beforeEach(() => {
    homePageObject.visit();
  });

  it(`should place order with '${product}'`, () => {
    homePageObject.clickOnCategory('Laptops');
    homePageObject.clickOnProduct(product);
    productPage.clickOnAddBtn();
    productPage.assertAllert('Product added');
    homePageObject.clickOnLink('Cart');

    cartObject.productsList.should('contain', product);

    cartObject.placeOrderBtn.click();

    placeOrderForm.fillAllFields();
    placeOrderForm.confirmBtn.click();
    placeOrderForm.confirmMessage.should('contain', generated.name);
    placeOrderForm.confirmMessage.should('contain', generated.creditCardNumber);

    placeOrderForm.okBtn.click();
  });
});

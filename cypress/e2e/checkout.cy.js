/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import OrderPageObject from '../support/pages/order.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderPage = new OrderPageObject();

describe('Demoblaze E-commerce Test Flow', () => {
  before(() => {
    homePage.visit(); 
  });

  it('should add product to cart and place an order', () => {
    homePage.clickOnCategory('Laptops'); 
    homePage.clickOnProduct('Sony vaio i7'); 
    
    productPage.clickAddToCart(); 
    productPage.assertAlert('Product added'); 

    homePage.clickOnLink('Cart'); 
    cartPage.assertProductInCart('Sony vaio i7'); 

    cartPage.clickPlaceOrder(); 
    orderPage.fillOrderForm(); 
    orderPage.clickPurchase(); 
    
    orderPage.assertOrderDetails(); 
    orderPage.clickOk(); 
  });
});

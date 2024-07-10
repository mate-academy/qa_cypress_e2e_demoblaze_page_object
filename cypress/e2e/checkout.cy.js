/// <reference types='cypress' />
import { SonyVaio7 } from '../support/pages/customerUserWay';

const sonyVaio7 = new SonyVaio7();
describe('Customer Laptop Purchase Flow', () => {
  before('Navigate to Home Page', () => {
    sonyVaio7.navigateToHome();
  });

  it('should complete the purchase of a laptop', () => {
    sonyVaio7.clickLaptopTab();
    sonyVaio7.clickSonyVaio7();
    sonyVaio7.addToTheCart();
    sonyVaio7.clickCartLink();
    sonyVaio7.checkItemInTheCart();
    sonyVaio7.clickThePlaceOrderButton();
    sonyVaio7.fillOutTheBuyingForm();
    sonyVaio7.clickPurchase();
    sonyVaio7.clickOkButton();
  });
});

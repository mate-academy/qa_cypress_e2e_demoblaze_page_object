/// <reference types='cypress' />
import { LaptopsTab } from '../support/pages/customerUserWay';

const Laptops = new LaptopsTab();
describe('Userflow using POM', () => {
  before('open webpage', () => {
    Laptops.navigateToHome();
  });

  it('full userway', () => {
    Laptops.clickLaptopTab();
    Laptops.clickSonyVaio7();
    Laptops.addToTheCart();
    Laptops.clickCartLink();
    Laptops.checkItemInTheCart();
    Laptops.clickThePlaceOrderButton();
    Laptops.filoutForm();
    Laptops.clickPurchase();
    Laptops.clickOkButton();
  });
});

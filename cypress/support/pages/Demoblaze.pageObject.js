import PageObject from "../PageObject"
import faker from 'faker';
import ContactFormPageObject from "./contactForm.pageObject";

export class CheckoutPageObject extends PageObject {
url = '';

//get laptopslink() {
//  return cy.get('[onclick="byCat('notebook')"]');
//}

get laptopslink() {
  return cy.contains('Laptops');
}

get sonylink() {
   return cy.contains('Sony vaio i7');
}
 get addToCart() {
   return cy.get('[onclick="addToCart(9)"]');
 }
 get assertaddedmessage() {
  return cy.on('window:alert', (alertText) => {
    expect(alertText).to.include('Product added');
  });
 }
}

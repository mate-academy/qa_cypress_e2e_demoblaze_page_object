/* eslint-disable */

import PageObject from '../PageObject'

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html'

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click()
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click()
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click()
  }

  clickOnLaptops() {
    cy.contains('Laptops').click()
  }

  addToCart() {
    cy.contains('Add to cart').click()
  }

  clickOnCart() {
    cy.contains('Cart').click()
  }
}
export default HomeAndCataloguePageObject

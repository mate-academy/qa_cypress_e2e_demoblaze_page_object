import PageObject from '../PageObject';

class HeaderNav extends PageObject {
  visit(url = 'https://www.demoblaze.com/') {
    cy.visit(url);
  }

  clickOnLink(name) {
    cy.contains('.nav-item', name)
      .click();
  }
}

export default HeaderNav;

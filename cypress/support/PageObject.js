class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  get currentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}

export default PageObject;

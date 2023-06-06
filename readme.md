# Cypress: Demoblaze (POM basics)

## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run the command `npm i`.
1. Create a new branch `git checkout -b testing`.
1. Resolve tasks in the `cypress`/`e2e`/`checkout.cy.js`.
1. Create a pull request.
1. Do not forget to click on `Re-request review` if you submit the homework after previous review.

## Task

App for testing: [Demoblaze](https://www.demoblaze.com/)

**Your task** is to automate the next flow using POM (you have an example in [contactForm.cy.js](./cypress/e2e/contactForm.cy.js) and more info in the theory to the topic):

1. Visit the home page
1. Click on the "Laptops"
1. Click on "Sony vaio i7"
1. Click on [Add to cart]
   - assert message in the alert
1. Click on "Cart"
   - assert the product is in the cart
1. Click on [Place order]
1. Fill all fields
1. Click on [Purchase]
   - assert entered data is shown on modal
1. Click on [Ok]

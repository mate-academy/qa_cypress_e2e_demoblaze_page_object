# Demoblaze Cypress E2E (POM Practice)

Automated end-to-end (E2E) test for the [Demoblaze](https://www.demoblaze.com/) demo store.  
This project was created as a self-practice to improve Cypress automation skills using the Page Object Model (POM) design pattern.

## What’s Tested

The test simulates a full purchase flow:

- Selecting a product  
- Adding it to the cart  
- Placing an order  
- Verifying confirmation modalє

## Repository Structure
```
qa_cypress_e2e_demoblaze_page_object/
├── cypress/ # Cypress test specs and support files
│ ├── e2e/ # Test cases 
│ └── pages/ # Page Object Models (POM) abstractions
├── .gitignore # Git ignore rules
├── cypress.config.js # Cypress configuration file
├── package.json # Node.js dependencies and scripts
├── package-lock.json # Lockfile for npm dependencies
├── README.md # Project documentation
```

## Technologies Used

- Cypress  
- JavaScript  
- Page Object Model (POM)

## Setup & Commands

### Install dependencies  
`npm install`

### Run all tests  
`npx cypress run`

### Open Cypress Test Runner (UI)  
`npx cypress open`

### Run a specific test  
`npx cypress run --spec "cypress/e2e/checkout.cy.js"`

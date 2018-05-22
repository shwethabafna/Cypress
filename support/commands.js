//SignUp PageCommands


Cypress.Commands.add("SignUp", () =>{
	cy.visit('https://www.shaadi.com')
    cy.contains('Login')
      .click()
    cy.url().should('include', '.shaadi')
    cy.wait(2000)
    cy.contains('Sign Up Free')
      .click()
    cy.wait(2000)
})
Cypress.Commands.add("InputFirstName", () =>{
cy.get('#layer_first_name').type("Shwetha")
})
Cypress.Commands.add("InputLastName", () =>{
cy.get('#layer_last_name').type("Bafna")
})

//2.1
Cypress.Commands.add("Click_Continue",() =>{
	cy.get('span').contains('Continue').should('be.visible').click()
})

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

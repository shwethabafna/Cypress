describe('Sign Up Free', function() {
  it('Click on Sign Up Free', function() {
    cy.visit('https://www.shaadi.com')

    cy.contains('Login')
    .click()
    cy.url().should('include', '.shaadi')
    cy.wait(2000)

    cy.contains('Sign Up Free')
      .click()
      cy.wait(2000)
  })
})


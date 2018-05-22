
describe('Reg2.0', function() {
    it('Click on Sign Up Free', function() {
        cy.SignUp()
    })
    it('Reg2.0 - Upto Next',function(){
	/*type email*/
    cy.get('#layer_email')
		.click()
		.type('cypress_cug_a@bankas.in')

    /*type password*/
    cy.get('#layer_password1')
    .click()
    .type('test')

    /*created for*/
    cy.get('#s2id_layer_postedby')
     .click()
     cy.wait(200)
     
     cy.get('.select2-result-label').eq(3).click()
     cy.get('#btnSubmit').click()

     ////
cy.InputFirstName()
cy.InputLastName()
//Select Day
cy.get('.select2-chosen').contains('Day').click()
cy.get('.select2-results > li').eq(3).click()

//Select Month
cy.get('.select2-chosen').contains('Month')
cy.get('.select2-results > li').eq(3).click()

//select year
cy.get('.select2-chosen').contains('Year')
cy.get('.select2-results > li').eq(3).click()
cy.wait(2000)

//select Religion
cy.get('#s2id_layer_community').click()
cy.get('.select2-results > li').eq(1).click()
cy.wait(5000)

//select MT
cy.get('#s2id_layer_mother_tongue').click()
cy.get('.select2-result-sub> li').eq(3).click()

//Submit
cy.get('a[id=btnSubmit]').eq(1).click()
  
	})
})


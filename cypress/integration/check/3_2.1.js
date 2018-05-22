describe('Fill_2.1' , function() {
  it('Fill_State',function(){

  	cy.get('input[name=state]').should('be.visible') 
  	var State = cy.get('input[name=state]')
  	cy.get('label').contains('State').should('be.visible') 
  	cy.get('#react-select-2--value').click()
  	State.click()
  	cy.get('div[title=Bihar]').click()
    })
  it('Fill_City',function(){
  	cy.get('input[name=city]').should('be.visible') 
  	cy.get('label').contains('City').should('be.visible') 
  	cy.get('#react-select-3--value').click()
  	cy.get('div[title=Ara]').click()
  })
  it('Select_MaritalStatus',function(){
  	cy.get('input[name=maritalStatus').should('be.visible').click()
  	 	cy.get('label').contains(' marital status').should('be.visible')
  	 	cy.get('div[title="Never Married"]').click()
  })
   it('Select_Caste',function(){
   	cy.get('input[name=caste]').should('be.visible').click()
  	 	cy.get('label').contains('community').should('be.visible')
  	 	cy.get('div[title=Patel]').click()
  	 	cy.wait(2000)
  })
   it('Verify_ContinueOn2.1',function(){   	
 cy.Click_Continue()
   })

})
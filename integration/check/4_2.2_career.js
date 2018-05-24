describe('Fill_2.2_career' , function() {
  it('Fill_Education_Level',function(){

  	cy.get('input[name=educationLevel]').should('be.visible') 
    cy.get('label').contains('Her').should('be.visible')
  	cy.get('label').contains('education level').should('be.visible')
  	cy.get('.Select-arrow-zone').eq(0).click()
    cy.get('input[name=educationLevel]').should('have.attr','placeholder','Select')
    cy.get('div[title=Doctorate]').click() 
    /*cy.get('input[name=educationLevel]').then(($btn) =>{
      var txt=$btn.type()
      console.log(txt)*/
    })
   it('Fill_Education_Field',function(){

    cy.get('input[name=educationField]').should('be.visible') 
    cy.get('label').contains('Her').should('be.visible')
    cy.get('label').contains('education field').should('be.visible')
    cy.get('.Select-arrow-zone').eq(1).click()
    cy.get('input[name=educationField]').should('have.attr','placeholder','Search here') 
    //cy.get('input[name=educationField]').should('have.attr','placeholder','Select') - beauty of cypress
     cy.get('div[title=Arts]').click() 
       })

    it('Fill_collegeName1',function(){

    cy.get('input[name=college_1]').should('be.visible') 
    cy.get('label').contains('College she attended (Highest degree college)').should('be.visible')
    cy.get('.Select-arrow-zone').eq(2).click()
    cy.get('input[name=college_1]').should('have.attr','placeholder','Type here') 
    cy.get('input[name=college_1]').type("oxford")
    cy.wait(2000)
    cy.get('input[name=college_1]').type('{downarrow}')
   cy.get('input[name=college_1]').type('{downarrow}')
   cy.get('input[name=college_1]').type('{enter}')
       })

    it('Check_RequiredFeild_Functionality',function(){     
 cy.Click_Continue()
 cy.get('div').contains('Oops! You seem to have missed this').should('be.visible')
   })

    it('Fill_Work_with',function(){
    cy.get('input[name=working_with]').should('be.visible') 
    //cy.get('label').contains('Works with').should('be.visible')
    cy.get('.Select-arrow-zone').eq(3).click()
    cy.get('input[name=working_with]').should('have.attr','placeholder','Select') 
    cy.get('input[name=working_with]').type('{downarrow}')
   cy.get('input[name=working_with]').type('{downarrow}')
   cy.get('input[name=working_with]').type('{enter}')
   cy.wait(2000)
       })
     it('Fill_annual_income',function(){
    cy.get('input[name=income]').should('be.visible') 
    //cy.get('input[name=income]').contains('Annual Income').should('be.visible')
    cy.get('.Select-arrow-zone').eq(4).click()
    cy.wait(2000)
    cy.get('input[name=income]').should('have.attr','placeholder','Select') 
    cy.get('input[name=income]').type('{downarrow}')
    cy.get('input[name=income]').type('{downarrow}')
   cy.get('input[name=income]').type('{enter}')
       })
it('Continue on 2.2',function(){     
 cy.Click_Continue()
    })
          	    })
  
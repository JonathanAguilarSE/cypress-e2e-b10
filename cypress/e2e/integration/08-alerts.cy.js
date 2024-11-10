/// <reference types="cypress"/>


// This is describe test block that holds group of tests
describe('Alerts', { tags: ['@smoke', '@regression'] }, () => {
    beforeEach(() => {
        // This will fail if the page doesn't send text/html with a 200 status
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("Alerts")
      });

      it("Handling the Warning alert", () => {
        cy.on('window:alert', (str) => {
            console.log(`My warniing alert text is: ${str}`)
            expect(str).to.equal('You are on TechGlobal Training application.')
        })

        cy.get('#warning_alert').click()
      })

      it("Handling the Confirmation Alert", () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Would you like to stay on TechGlobal Training application?')

            // return false
        })

        cy.get("#confirmation_alert").click()

      })

      /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   */

      it("Handling the Confirmation Alert Task", () => {
        
        cy.get("#confirmation_alert").click()
        
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Would you like to stay on TechGlobal Training application?')

            return false
        })

        cy.get('#action').should('have.text', "You rejected the alert by clicking Cancel.")


      })

      it('Handling Prompt Alert', () => {
        
        // Clicks cancel for the prompt error
        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt').returns(null)
        // })
        
        // Clicks cancel for the prompt error
        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt')
        //     return false
        // })

        // Clicks okay and sends message through the prompt
        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt').returns('TechGlobal school message')
        // })


        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt').returns('TechGlobal school message')
        // })

        // cy.window().then((win) => {
        //     cy.stub(win, 'prompt').returns('')
        // })


        cy.window().then((win) => {
            cy.stub(win, 'prompt').callsFake((message) => {
                console.log(message)
                expect(message).to.equal('What would you like to say to TechGlobal?')
                return  'My Message'
            })
        })
        
        cy.get('#prompt_alert').click()

      })

})
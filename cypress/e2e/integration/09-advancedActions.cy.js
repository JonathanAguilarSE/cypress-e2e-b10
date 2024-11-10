 /// <reference types="cypress"/>


// This is describe test block that holds group of tests
describe('Keyboard & Mouse Actions', () => {
    beforeEach(() => {
        // This will fail if the page doesn't send text/html with a 200 status
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("Actions")
      });

      it('Mouyse actions using Cyporess events', () => {
        // cy.pause()
        // cy.get('#dropdown-testing').trigger('mouseover')
        
        cy.get('#dropdown-testing').realHover();

      })

      it('Keyboard Actions', () => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard('HTML Elements')

        cy.get('#text_input1').realClick().realPress('a').realPress('Tab').realPress('A')
      })

      it('Right Click, and Double click', () => {

        cy.url().then((url) => {
          const actions = url.slice(url.lastIndexOf('/') + 1)
          cy.log(actions)

          cy.wrap(actions).should('eq', 'actions')
        })

        cy.get('[id$=click]').as('buttons')

      })

      it('Drag and drop', () => {
        cy.get('#drag_element').drag('#drop_element')
      })

})
/// <reference types="cypress"/>



// This is describe test block that holds group of tests
describe('My First Tests', () => {

    // This is it test block that holds individual test
    it('Visit TechGlobal tranining app homepage', () => {

        cy.visit('https://techglobal-training.com/')

        // command to refresh your current url
        cy.reload()

        cy.visit('https://techglobal-training.com/frontend')

        // Navigate back on the homepage
        // cy.go('back')
        cy.go(-1)

        // Navigate forward on the webpage
        // cy.go('forward')
        cy.go(1)

        cy.title().should('eq', 'TechGlobal Training | Home')

        cy.url().should('includes', 'https://www.techglobal-training.com')

    })

    it('My First Test', () => {
        
        // expect(true).to.equal(true)

        cy.visit('https://techglobal-training.com')

        // cy.get('#logo').click()
        // cy.get('#logo').should('be.visible')
        cy.get('#logo').click().should('be.visible')

    })
})
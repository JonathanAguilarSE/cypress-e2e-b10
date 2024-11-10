 /// <reference types="cypress"/>
 import fs from 'fs'


// This is describe test block that holds group of tests
describe('File Download & File Upload', () => {
    beforeEach(() => {
        // This will fail if the page doesn't send text/html with a 200 status
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("File Download & Upload")
      });

      const fileName = 'SampleText.txt'

      it('File Download', () => {

        cy.get('#file_download').click()

        cy.readFile(`cypress/downloads/${fileName}`)

      })

      it('File Upload', () => {

        cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)

        cy.get('#file_submit').realClick()

        cy.get('#result').should('have.text', `You uploaded ${fileName}`)

      })
})
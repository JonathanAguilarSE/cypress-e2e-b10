/// <reference types="cypress"/>

import BaseWikipediaPage from "../../pages/BaseWikipediaPage";

const baseWikipediaPage = new BaseWikipediaPage();

describe('Practice 02', () => {
    beforeEach(() => {
      cy.visit('https://www.wikipedia.org/');

      cy.fixture('example').then(function(data) {
        this.topTenLang = data.topTenLang
        this.numOfArticles = data.numOfArticles
      })
    });

    it('Validate Wikipedia Logo & SLogan', () => {
        baseWikipediaPage.getWikiLogo().should('be.visible').and('contains.text', 'Wikipedia')
        baseWikipediaPage.getWikiSlogan().should('be.visible').and('contains.text', 'The Free Encyclopedia')
    })

    it('Validate Wikipedia Top Ten Languages', function() {
        baseWikipediaPage.getTopTenLang().each(($el, i) => {
            cy.wrap($el).should('be.visible').and('contains.text', this.topTenLang[i])
        })
        baseWikipediaPage.getTopTenLang().first().should('contains.text', 'English')
    })

    it('Validate Wikipedia Search Results', () => {
        baseWikipediaPage.getSearchBox().type('Cypress{enter}')
        // baseWikipediaPage.getSearchBoxEnter().click()
        baseWikipediaPage.getPageHeader().should('contains.text', 'Cypress')
        cy.title().should('include', 'Cypress')
        cy.url().should('include', 'Cypress')
    })

    it.only('Validate Wikipedia Article Numbers for All Languages', function() {
        baseWikipediaPage.clickReadWikiBtn()
        baseWikipediaPage.getLangList().each(function($el, i) {
            cy.wrap($el).find('a').should('have.length', this.numOfArticles[i])
        })
    })

})
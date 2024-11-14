class BaseWikipediaPage {
    getWikiLogo() {
        return cy.get('span.central-textlogo__image')
    }

    getWikiSlogan() {
        return cy.get('strong.localized-slogan')
    }

    getTopTenLang() {
        return cy.get('div.central-featured-lang strong')
    }

    getSearchBox() {
        return cy.get('#search-input')
    }

    getSearchBoxEnter() {
        return cy.get('button.pure-button')
    }

    getPageHeader() {
        return cy.get('.mw-page-title-main')
    }

    getReadWikiBtn() {
        return cy.get('#js-lang-list-button')
    }

    getLangList() {
        return cy.get('.langlist > ul')
    }




    clickSearchInput() {
        this.getSearchBox().click()
    }

    clickReadWikiBtn() {
        this.getReadWikiBtn().click()
    }
}

export default BaseWikipediaPage
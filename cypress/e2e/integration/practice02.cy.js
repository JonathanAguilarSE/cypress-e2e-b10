/// <reference types="cypress"/>

import BasePageAmazon from "../../pages/BasePageAmazon";

const basePageAmazon = new BasePageAmazon();

describe('Practice 02', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');

      cy.fixture('example').then(function(data) {
        this.zipCode = data.zipCode
        this.city = data.city
        this.footerColumnNames = data.footerColumnNames
      })
    });
  
    /*
1. Go to https://www.amazon.com/
2. Validate that the Amazon logo is displayed
3. Validate the location section is displayed
4. Validate the "All" dropdown is displayed
5. Validate the search box is displayed
6. Validate the search icon is displayed
7. Validate the language dropdown is displayed
8. Validate the "Hello, sign in | Account & Lists" section is displayed
9. Validate the "Returns & Orders" section is displayed
10. Validate the cart is displayed with zero item by default
*/

    it('TASK-1: Validate the Amazon Header', () => {
        
        basePageAmazon.getLogo().should('be.visible');
        basePageAmazon.getLocationSection().should('be.visible');
        basePageAmazon.getSearchDropdown().should('be.visible');
        basePageAmazon.getSearchBox().should('be.visible');
        basePageAmazon.getSearchIcon().should('be.visible');
        // basePageAmazon.getLanguageDropdown().should('be.visible');
        basePageAmazon.getHelloSection().should('be.visible');
        basePageAmazon.getReturnAndOrders().should('be.visible');
        basePageAmazon.getCart().should('be.visible');
        
    });

    // it('Task-2: Validate the Amazon Location Update', function() {
    //     basePageAmazon.clickLocationSection();
    //     basePageAmazon.enterZipCode("60018");
    //     //basePageAmazon.enterZipCode(this.zipCode);
    //     //basePageAmazon.getZipCodeInput().type(Cypress.env(“UI_ZIPCODE”));
    //     //basePageAmazon.getZipCodeInput().type(Cypress.env(“UI_ZIPCODE”));
    //     basePageAmazon.clickZipCodeApplyBtn();
    //     basePageAmazon.getZipCodeConfirmationMsg().should("contain", this.zipCode);
    //     basePageAmazon.clickZipCodeDoneBtn();
    //     basePageAmazon.getLocationSection().should("contain", `${this.city}`, `${this.zipCode}`);
    // });

    // it("Task-3: Validate Amazon search results", () => {
    //     basePageAmazon.getSearchBox().type("Mug")
    //     // basePageAmazon.clickSearchIcon()
    //     basePageAmazon.enterInSearchBox("Mug")
    //     basePageAmazon.clickSearchIcon()
    //     basePageAmazon.getSearchResult().should("be.visible").and("contain", "result")
    // })

    it("Task-4: Validate Amazon footer column", function() {
        basePageAmazon.getFooterHeadings().each(($el, index) => {
            cy.wrap($el).should("be.visible").and("have.text", this.footerColumnNames[index])
        })
    })
});
import StaticTablesPage from "../../pages/StaticTablesPage";

const staticTables = new StaticTablesPage();

describe("Static Tables", () => {
    beforeEach(() => {
        cy.clickCard("Tables");
    
        cy.fixture('example').then(function(data) {
          this.tableColumnNames = data.tableColumnNames;
        })
    });
    
    /**
     * TEST CASE 1
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */
    it("Verify the headers of the table", { tags: '@table' }, () => {
        staticTables.getHeaderName().each(function($el, index) {
            cy.wrap($el).should("have.text", this.tableColumnNames[index])
        })
    });
  });
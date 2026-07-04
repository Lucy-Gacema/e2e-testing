describe("Mini Project - Complete Test Suite", () => {
before(() => {

cy.log("Starting test suite");
});

beforeEach(() => {

cy.visit("https://the-internet.herokuapp.com/");
});

  it("performs comprehensive testing", () => {
});
it("performs comprehensive testing", () => {
cy.get('a[href="/login"]').click();
cy.get("#username").type("tomsmith");
cy.get("#password").type("SuperSecretPassword!");
cy.visit("/dropdown");
cy.get("#dropdown").select("Option 1").should("have.value", "1");
cy.get("#dropdown").select("Option 2").should("have.value", "2");
cy.visit("/checkboxes");
cy.get('input[type="checkbox"]').first().check().should("be.checked");
cy.get('input[type="checkbox"]').first().uncheck().should("not.be.checked");
cy.visit("/inputs");
cy.get('input[type="number"]').type("12345").should("have.value", "12345");
cy.visit("/upload");
cy.get("#file-upload").selectFile("cypress/fixtures/example.json");
cy.get("#file-submit").click();

cy.visit('/');
cy.get('#page-footer').scrollIntoView()
.should('be.visible');
cy.visit('/login');
cy.get('#username').type('tomsmith');
cy.get('#password').type('SuperSecretPassword!');
cy.get('button[type="submit"]').click();
cy.get('#flash').should('contain', 'You logged into a secure area!')
.and('have.class', 'success');
cy.get('#page-footer').should('be.visible');
cy.get('.success').should('exist');


});

});
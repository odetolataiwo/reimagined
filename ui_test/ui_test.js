import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the site", () => {
    cy.visit("**");
});

When("I enter a wrong login details", () => {
    cy.get('button[type=submit]').should('be.disabled')
    cy.get('[id="emailAddress"]').type("**")
    cy.get('[id="password"]').type("**")

    cy.get('button[type=submit]').should('be.enabled')
    cy.get('button[type=submit]').click()
});

Then("I should see an error occurred", () => {
    cy.get('div').contains('User does not exist').should('be.visible')
});

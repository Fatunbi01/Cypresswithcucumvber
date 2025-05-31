const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../../pages/login";

Given("I am on the Orangehrm login page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/", {
    timeout: 60000, // Wait up to 60 seconds for page to load
  });
});

When("I enter valid credentials", () => {
  cy.get("input[name='username']", { timeout: 10000 }).should("be.visible").type("Admin");
  cy.get("input[name='password']").should("be.visible").type("admin123");
  cy.get("button[type='submit']").click();
});

Then("I should be logged in", () => {
  // Ensure we are redirected to the dashboard
  cy.url({ timeout: 10000 }).should("include", "/dashboard");

  // Wait for the dashboard breadcrumb to be visible
  cy.get(".oxd-topbar-header-breadcrumb", { timeout: 10000 })
    .should("contain", "Dashboard");

  // Optional delay for visual verification or to ensure stability
  cy.wait(3000); // 3-second wait before the browser closes
});

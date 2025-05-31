// step_definitions/homepage.js
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../pages/homepage";

Given("I visit Orangehrm", () => {
  HomePage.visit(); // This now waits for full page load
});

When("I check the page title", () => {
  // Optional: Add visual validation if needed
  cy.screenshot('page-loaded'); // Takes screenshot for verification
});

Then("It should contain {string}", (expectedText) => {
  HomePage.verifyTitle(expectedText);
  // Final wait to ensure everything is stable
  cy.wait(2000); // Additional 2 seconds before closing
});













// // step_definitions/homepage.js
// const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// import HomePage from "../../pages/homepage";

// Given("I visit Orangehrm", () => {
//   HomePage.visit();
// });

// // Either implement the step...
// When("I check the page title", () => {
//   // This step doesn't need to do anything since verification happens in Then
//   // Or you could move the title check here if preferred
// });

// // ...or remove it from your feature file and keep this:
// Then("It should contain {string}", (OrangeHRM) => {
//   HomePage.verifyTitle(OrangeHRM);
// });

// Given("I visit Orangehrm", () => {
//   cy.visit("https://opensource-demo.orangehrmlive.com/", {
//     timeout: 60000, // wait up to 60s for the page to load
//   });
// });

// When("I check the page title", () => {
//   cy.title().should("exist");
// });

// Then("It should contain {string}", (OrangeHRM) => {
//   cy.title().should("include", OrangeHRM);

//   // Optional: wait for key element to be visible (ensures page is fully loaded)
//   cy.get("div.orangehrm-login-branding", { timeout: 10000 }).should("be.visible");

//   // Optional: wait before Cypress auto-closes (useful for visual checks)
//   cy.wait(3000); // Wait 3 seconds before test ends
// });

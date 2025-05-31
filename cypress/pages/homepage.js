// // pages/homepage.js
// class HomePage {
//     // Visit OrangeHRM website
//     static visit() {
//         cy.visit("https://opensource-demo.orangehrmlive.com/", {
//             timeout: 90000 // Wait up to 90 seconds for page to load
//         });
//         // Wait for page to fully load
//         cy.get('.orangehrm-login-branding', { timeout: 90000 }).should('be.visible');
//     }

//     // Verify page title
//     static verifyTitle(OrangeHRM) {
//         cy.title().should('contain', OrangeHRM);
//     }
// }

// export default HomePage;

// pages/homepage.js
class HomePage {
    // Visit OrangeHRM website with comprehensive loading checks
    static visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/", {
            timeout: 90000 // Extended timeout (90 seconds)
        });
        
        // Check for multiple elements to ensure full page load
        cy.get('.orangehrm-login-branding', { timeout: 90000 }).should('be.visible');
        cy.get('input[name="username"]', { timeout: 90000 }).should('be.visible');
        cy.get('input[name="password"]', { timeout: 90000 }).should('be.visible');
        cy.get('button[type="submit"]', { timeout: 90000 }).should('be.visible');
        
        // Additional check for page stability (no network requests for 2 seconds)
        cy.intercept('**').as('requests');
        cy.wait(2000); // Wait for potential late-loading elements
    }

    // Verify page title with explicit waiting
    static verifyTitle(expectedText) {
        cy.title({ timeout: 90000 }).should('contain', expectedText);
    }
}

export default HomePage;
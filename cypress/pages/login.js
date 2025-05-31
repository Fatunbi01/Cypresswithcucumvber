// pages/login.js
class LoginPage {
    // Visit login page with comprehensive loading checks
    static visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/", {
            timeout: 90000 // Extended timeout (90 seconds)
        });
        
        // Check for all login page elements
        this.verifyLoginPageLoaded();
    }

    // Verify all login page elements are loaded
    static verifyLoginPageLoaded() {
        cy.get('.orangehrm-login-branding', { timeout: 90000 }).should('be.visible');
        cy.get('input[name="username"]', { timeout: 90000 }).should('be.visible');
        cy.get('input[name="password"]', { timeout: 90000 }).should('be.visible');
        cy.get('button[type="submit"]', { timeout: 90000 }).should('be.visible');
        
        // Network stability check
        cy.intercept('**').as('requests');
        cy.wait(2000);
    }

    // Enter login credentials
    static enterCredentials(username, password) {
        cy.get("input[name='username']").clear().type(Admin);
        cy.get("input[name='password']").clear().type(admin123);
        return this; // For method chaining
    }

    // Submit login form
    static submitLogin() {
        cy.get("button[type='submit']").click();
        return this;
    }

    // Verify successful login
    static verifySuccessfulLogin() {
        // Check dashboard URL
        cy.url({ timeout: 90000 }).should("include", "/dashboard");
        
        // Check dashboard elements
        cy.get(".oxd-topbar-header-breadcrumb", { timeout: 90000 })
            .should("contain", "Dashboard");
        
        // Final stability check
        cy.wait(3000);
    }
}

export default LoginPage;
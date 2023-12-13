// cypress/integration/loginSignup.spec.js

describe('Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); // Replace with the URL where your application is running
    });
  
    it('should log in with valid credentials', () => {
      cy.get('#loginusername').type('testuser');
      cy.get('#loginpassword').type('testpassword');
      cy.get('#loginButton').click();
      cy.wait(1000); // Adjust the wait time based on your application's loading time
    });
  
    it('should not log in with invalid credentials', () => {
      cy.get('#loginusername').type('testuser');
      cy.get('#loginpassword').type('testpassword12334');
      cy.get('#loginButton').click();
      cy.wait(1000); // Adjust the wait time based on your application's loading time
    });
  
    // Add more test cases as needed, such as testing invalid credentials, password mismatch, etc.
  });
  
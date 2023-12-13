const { Eyes, Target } = require('@applitools/eyes-cypress');

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should log in with valid credentials', () => {
    // Create an instance of Eyes
    const eyes = new Eyes();

    // Set Applitools API key
    eyes.setApiKey('sTfjGsNwJ19EYhTDBdZI6LUNU107ad02zMZPXYLuRy3y8110');

    // Start the test and set the browser's viewport size
    cy.wrap(eyes.open(cy, 'App', 'Login Test'), { log: false });

    // Use Applitools to check the entire page
    cy.eyesCheckWindow('Login Page');

    // Interact with the login form
    cy.get('#loginusername').type('testuser');
    cy.get('#loginpassword').type('testpassword');
    cy.get('#loginButton').click();

    // Use Applitools to check the updated view
    cy.eyesCheckWindow('After Login');

    // End the test
    cy.wrap(eyes.close(undefined), { log: false });
  });

  // Add more test cases as needed
});

// userLogin.test.js
const { JSDOM } = require('jsdom');

// Import or include your functions from userLogin.js
const { registerNewUser, addUserToSession, performUserLogin } = require('./userLogin');

describe('User Login Page', () => {
    let dom;

    beforeEach(() => {
        // Load the HTML file
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>BudgetApp Login</title>
                <script src="userLogin.js"></script>
            </head>
            <body>
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
                <label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up">
                <label for="tab-2" class="tab">Sign Up</label>
            </body>
            </html>
        `;
        dom = new JSDOM(html, { runScripts: 'dangerously' });
    });

    it('should fetch the correct label for Sign In', () => {
        // Trigger the click event to execute the script
        dom.window.document.getElementById('tab-1').click();

        // Access the label element
        const label = dom.window.document.querySelector('label.tab');

        // Assert that the label text is "Sign In"
        expect(label.textContent.trim()).toBe('Sign In');
    });

    // Add more tests for other functionalities if needed
});


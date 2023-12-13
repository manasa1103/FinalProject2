const supertest = require('supertest');
const app = require('./server'); // Replace with the actual path to your app file

describe('POST /signupUser', () => {
  test('should register a new user', async () => {
    const response = await supertest(app)
      .post('/signupUser')
      .send({
        username: 'test'+Math.floor(Math.random()*90000) + 10000 +'user',
        password: 'testpassword',
        firstName: 'Test',
        lastName: 'User',
        phone: '1234567890',
        email: 'testuser@example.com',
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test('should fail to register a new user with missing data', async () => {
    const response = await supertest(app)
      .post('/signupUser')
      .send({
        // Missing some required fields
      });

    expect(response.status).toBe(500); // Adjust the status code based on your actual error handling
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe('Internal server error');
  });

  // Add more test cases as needed, such as testing password mismatch, invalid email, etc.
});

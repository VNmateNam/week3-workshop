const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  // Send the login form HTML page
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/account', (req, res) => {
  // Send the account page HTML page
  res.sendFile(path.join(__dirname, 'public', 'account.html'));
});

// Endpoint to test user credentials
app.post('/login', (req, res) => {
  // Retrieve and validate user credentials from req.body
  // Compare with hardcoded credentials
  // Send response as JSON based on validity
  const { email, password } = req.body;
  const hardcodedCredentials = [
    { email: 'user1@griffith.com', password: '123' },
    { email: 'user2@griffith.com', password: '456' },
    { email: 'user3@griffith.com', password: '789' },
  ];

  const validUser = hardcodedCredentials.some(
    (cred) => cred.email === email && cred.password === password
  );

  res.json({ valid: validUser });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

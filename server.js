const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

app.use(cors());

// Include route files
const usersRoute = require('./controllers/users');
const imagesRoute = require('./controllers/images');

// Use routes
app.use('/users', usersRoute);
app.use('/images', imagesRoute);

// // Example specifying the port and starting the server
const port = process.env.PORT || 3030; // You can use environment variables for port configuration

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

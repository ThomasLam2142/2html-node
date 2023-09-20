const express = require('express');
const app = express();

// Serve static files (e.g., HTML, CSS, JavaScript) from a public directory.
app.use(express.static('public'));

// Define a route to serve the index.html file when the root path ('/') is accessed.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define a route to serve the page2.html file when the '/page2' path is accessed.
app.get('/page2', (req, res) => {
  res.sendFile(__dirname + '/public/page2.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

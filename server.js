const express = require('express');
const app = express();
const port = 200;
const path=express();

// Serve static files from a directory (your HTML, CSS, JavaScript, etc.)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

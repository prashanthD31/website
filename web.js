const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public');
    
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
// const express = require('express');
// const app = express();
// const port = 700; // Choose the port you want to use

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on the port ${port}`);
// });


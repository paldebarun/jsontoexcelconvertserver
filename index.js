const express = require('express');
const excelController = require('./controller');
const cors=require('cors')

const app = express();
app.use(cors());
const port = 3000;

// Middleware
app.use(express.json()); // Built-in middleware for parsing JSON

// Routes
app.post('/convert-to-excel', excelController.convertToExcel);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

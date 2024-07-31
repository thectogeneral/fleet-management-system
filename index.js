require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
   res.send("Hello, World")
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
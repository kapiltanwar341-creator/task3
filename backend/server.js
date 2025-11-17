const express = require('express');
const cors = require('cors');
const booksRouter = require('./routes/books');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());            
app.use(express.json()); 

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

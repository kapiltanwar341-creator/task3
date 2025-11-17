let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' }
];
let nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;


function parseIdParam(req) {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// Get book by id
exports.getBookById = (req, res) => {
  const id = parseIdParam(req);
  if (!id) return res.status(400).json({ error: 'Invalid id' });

  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

// Create a new book
exports.createBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const newBook = { id: nextId++, title: String(title), author: String(author) };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Update book by id
exports.updateBook = (req, res) => {
  const id = parseIdParam(req);
  if (!id) return res.status(400).json({ error: 'Invalid id' });

  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  const { title, author } = req.body;
  if (!title && !author) {
    return res.status(400).json({ error: 'Provide title or author to update' });
  }

  const updated = { ...books[index] };
  if (title) updated.title = String(title);
  if (author) updated.author = String(author);

  books[index] = updated;
  res.json(updated);
};

// delete a book by id
exports.deleteBook = (req, res) => {
  const id = parseIdParam(req);
  if (!id) return res.status(400).json({ error: 'Invalid id' });

  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  const [removed] = books.splice(index, 1);
  res.json({ message: 'Deleted', book: removed });
};

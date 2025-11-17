# task3

#  Books REST API (Node.js + Express)

A simple **REST API** built with **Node.js** and **Express**, organized using **routes** and **controllers**.  
This API manages a list of books stored **in-memory** (no database required). Ideal for learning CRUD, Express architecture, and building a lightweight backend.

---

## Features

- GET all books  
- GET a single book by ID  
- POST a new book  
- PUT (update) a book by ID  
- DELETE a book by ID  
- Clean Routes + Controllers structure  
- In-memory data store (resets when the server restarts)  
- CORS enabled to allow simple frontend testing

---

## Project Structure
books-api/
│
├── controllers/
│ └── booksController.js
│
├── routes/
│ └── books.js
│
├── index.js
├── package.json
└── README.md



---

## Tech Stack

- Node.js  
- Express.js  
- CORS  
- Nodemon (optional, for development auto-reload)

---
#  **All Routes Summary**

Endpoint       | Description                 
---------------|------------------------
`/books`       | Get all books               
`/books/:id`   | Get book by ID               
`/books`       | Create a new book            
`/books/:id`   | Update an existing book      
`/books/:id`   | Delete a book by ID          




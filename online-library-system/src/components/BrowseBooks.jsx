import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  let filteredBooks = category 
    ? books.filter(b => b.category.toLowerCase() === category.toLowerCase()) 
    : books;

  filteredBooks = filteredBooks.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Browse Books {category ? `- ${category}` : '(All)'}</h2>
      
      <input 
        type="text" 
        className="search-bar"
        placeholder="Search by book title or author name..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredBooks.length === 0 ? <p>No books found matching criteria.</p> : (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <Link to={`/book/${book.id}`} className="view-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;
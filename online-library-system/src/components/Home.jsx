import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const books = useSelector((state) => state.books.books);
  
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];
  
  const popularBooks = books.filter(book => book.rating >= 4.7);

  return (
    <div className="container">
      <div className="welcome-section">
        <h1>Welcome to the Digital Online Library</h1>
        <p>Explore thousands of books across multiple fields and genres.</p>
        <div className="categories-list">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="category-badge">
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <h2>Popular Books 🔥</h2>
      <div className="book-grid">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> ⭐ {book.rating}</p>
            <Link to={`/book/${book.id}`} className="view-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
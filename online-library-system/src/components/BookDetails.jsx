import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <h2>Book Not Found</h2>
        <Link to="/books" className="btn">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ background: 'white', padding: '2rem', borderRadius: '8px' }}>
      <h1>{book.title}</h1>
      <p style={{ margin: '0.5rem 0' }}><strong>Author:</strong> {book.author}</p>
      <p style={{ margin: '0.5rem 0' }}><strong>Category:</strong> {book.category}</p>
      <p style={{ margin: '0.5rem 0' }}><strong>Rating:</strong> ⭐ {book.rating} / 5</p>
      <h3 style={{ marginTop: '1.5rem' }}>Description:</h3>
      <p style={{ color: '#555', lineHeight: '1.6' }}>{book.description}</p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/books" className="btn" style={{ textDecoration: 'none' }}>Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetails;
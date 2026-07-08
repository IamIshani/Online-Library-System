import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Title is required";
    if (!author.trim()) formErrors.author = "Author is required";
    if (!description.trim()) formErrors.description = "Description is required";
    if (!rating || rating < 0 || rating > 5) formErrors.rating = "Provide a valid rating between 0 and 5";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(addBook({
      id: Date.now(),
      title,
      author,
      category,
      description,
      rating: parseFloat(rating)
    }));

    navigate('/books');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', background: 'white', padding: '2rem', borderRadius: '8px' }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
        
        <div className="form-group">
          <label>Book Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label>Author Name</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          {errors.author && <p className="error-text">{errors.author}</p>}
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Rating (0 to 5)</label>
          <input type="number" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} />
          {errors.rating && <p className="error-text">{errors.rating}</p>}
        </div>

        <button type="submit" className="btn">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
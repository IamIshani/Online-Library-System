import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Sci-Fi",
      description: "A fantasy novel and children's book by English author J. R. R. Tolkien.",
      rating: 4.8
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A novel before-hand exploring civil rights and racism in the American South.",
      rating: 4.9
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "A book detailing the history of humankind from the evolution of archaic human species.",
      rating: 4.7
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "Set in the far future amidst a sprawling feudal interstellar empire.",
      rating: 4.6
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
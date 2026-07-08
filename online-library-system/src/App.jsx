import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';

// A wrapper component to conditionally render Navbar
function AppContent() {
  const location = useLocation();
  
  // Define known paths to handle header removal logic cleanly
  const knownRoutes = ['/', '/books', '/add-book'];
  const isBrowseCategory = location.pathname.startsWith('/books/');
  const isBookDetail = location.pathname.startsWith('/book/');
  
  const is404 = !knownRoutes.includes(location.pathname) && !isBrowseCategory && !isBookDetail;

  return (
    <>
      {/* Hide Header navbar if the route is a 404 Error screen */}
      {!is404 && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
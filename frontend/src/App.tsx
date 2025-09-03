import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnitsPage from './pages/UnitsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px 0',
          borderBottom: '1px solid #ddd',
          marginBottom: '30px'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>Home</Link>
          <Link to="/units" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>Units</Link>
          <Link to="/gallery" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>Gallery</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
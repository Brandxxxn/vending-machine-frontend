import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import ProductosList from './components/ProductosList'; // Asegúrate de tener este componente
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<ProductosList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
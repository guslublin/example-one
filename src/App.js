import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Mascotas from './pages/Mascotas';
import Login from './pages/Login';  // Importa el componente Login
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> 
            <Route path="/login" element={<Login />} />  {/* Nueva ruta para Login */}
            <Route path="/home" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/mascotas" element={<Mascotas />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
